function primeNumber(desiredNumberFirst,desiredNumberEnd){
    var singleDigit=0 , NumberDehgan=0 , hundredDigit=0
    for (let number = desiredNumberFirst; number <= desiredNumberEnd; number++) {
        singleDigit=number%10
        NumberDehgan=((number%100)-singleDigit)/10
        hundredDigit=((number-(number%100))%1000)/100
        if ((singleDigit==1 || singleDigit==3 || singleDigit==5 || singleDigit==7)
         && 
        (hundredDigit==1 || hundredDigit==3 || hundredDigit==5 || hundredDigit==7)) 
        {
            console.log("number: "+number);
        }
    }
}
primeNumber(100,999)