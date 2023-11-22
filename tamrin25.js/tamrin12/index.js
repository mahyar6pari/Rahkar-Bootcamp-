function threeDigitNumbers(lowestNumber,largestumber) {
    var digit=0
    var sum=0
    for (let number = lowestNumber; number <= largestumber; number++) {
        digit=(number%10)
        if(digit==4){
            console.log("number: "+number);
            sum+=number
        }
    }
    console.log("sum: "+sum);
}
threeDigitNumbers(100,999)