function divisibility(desiredNumber){
    var count=0
    var sum=0
    for (let number = 1; number< desiredNumber; number++) {
        if (number%7==0 && number%3==0) {
            console.log("number: "+number);
            sum+=number
            count++
        }
    }
    console.log("count: "+count);
    console.log("sum: "+sum);
}
divisibility(300)