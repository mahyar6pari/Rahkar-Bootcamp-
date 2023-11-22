function digits(desiredNumber){
    singleDigit=desiredNumber%10
    NumberDehgan=((desiredNumber%100)-singleDigit)/10
    hundredDigit=((desiredNumber-(desiredNumber%100))%1000)/100
    console.log("singleDigit: "+singleDigit);
    console.log("NumberDehgan: "+NumberDehgan);
    console.log("hundredDigit: "+hundredDigit);
}
digits(2753)