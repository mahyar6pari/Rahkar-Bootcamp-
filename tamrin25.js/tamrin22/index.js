function date(year,month,day) {
    const d= new Date(year,month,day)
    if (d.getMonth()<7) {
        if (d.getDate()<31) {
            d.setDate(day+1)
        }
        else if (d.getDate()==31) {
            d.setDate('1')
            d.setMonth(month+1)
        }
    }
    else if (6<d.getMonth()<12) {
        if (d.getDate()<30) {
            d.setDate(day+1)
        }
        else if (d.getDate()==30) {
            d.setDate('1')
            d.setMonth(month+1)
        }
    
    }
    else if (d.getMonth()==12) {
        if (d.getDate()<29) {
            d.setDate(day+1)
        }
        else if (d.getDate()==29) {
            d.setDate('1')
            d.setMonth(month-11)
        }
    }
    console.log(d.getFullYear()+"/"+d.getMonth()+"/"+d.getDate());
}
date(1403,9,30)
