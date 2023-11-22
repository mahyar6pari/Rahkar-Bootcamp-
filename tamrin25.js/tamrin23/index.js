function date(day) {
    let month=1
    let date=1
    let d
    if (day<=186) {
        date=day%31
        for (let i = 0; i < 7; i++) {
            if (day/31<i) {
                month=i-1
                   break
            }

        }

    }
    else if (186<day<=336) {
        date=(day-186)%30
        for (let i = 7; i < 12; i++) {
            if ((day-186)/30<i) {
                month=i-1
                break
            }

        }
    }
    else if (336<day<365) {
        date=(day-336)%29
        month='12'
    }
    d = new Date(1403,month,date)   
    console.log(d.getFullYear(),d.getMonth(),d.getDate());
}
date(155)