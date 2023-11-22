function threeDigitNumbers(desiredNumberStart,desiredNumberEnd) {
    var singleDigit=0 , NumberDehgan=0 , hundredDigit=0 ,sum=0
    for (let number = desiredNumberStart; number <=desiredNumberEnd; number++) {
        singleDigit=number%10
        NumberDehgan=((number%100)-singleDigit)/10
        hundredDigit=((number-(number%100))%1000)/100
        sum=Math.pow(singleDigit,3)+Math.pow(NumberDehgan,3)+Math.pow(hundredDigit,3)
        if (sum==number) {
            console.log("number: "+number);
        }
    }
}
threeDigitNumbers(100,999)