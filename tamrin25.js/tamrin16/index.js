function fourDigitNumber(desiredNumberStart,desiredNumberEnd) {
    var singleDigit=0 , NumberDehgan=0 , hundredDigit=0 , numberThousands=0
    for (let number =desiredNumberStart; number <= desiredNumberEnd; number++) {
        singleDigit=number%10
        NumberDehgan=((number%100)-singleDigit)/10
        hundredDigit=((number-(number%100))%1000)/100
        numberThousands=((((number-(number%100))%10000)/100)-hundredDigit)/10
        if (singleDigit>=1 && NumberDehgan>=3 && hundredDigit>=2 && numberThousands>=5) {
            if (singleDigit+numberThousands==NumberDehgan+hundredDigit) {
                    console.log("number: "+number);
            }
        }
        
    }
}
fourDigitNumber(1000,9999)
