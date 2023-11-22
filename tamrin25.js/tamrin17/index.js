function reachNumber(desiredNumberStart,desiredNumberEnd){
    var singleDigit=0 , NumberDehgan=0 , hundredDigit=0 , numberThousands=0
    for (let number =desiredNumberStart; number <= desiredNumberEnd; number++) {
        singleDigit=number%10
        NumberDehgan=((number%100)-singleDigit)/10
        hundredDigit=((number-(number%100))%1000)/100
        numberThousands=((((number-(number%100))%10000)/100)-hundredDigit)/10
        FirstTwoDigits=singleDigit+NumberDehgan*10
        SecondTwoDigits=hundredDigit+numberThousands*10
        if (FirstTwoDigits>=31 && SecondTwoDigits>=52) {
            console.log(number);
        }
}
}
reachNumber(1000,9999)