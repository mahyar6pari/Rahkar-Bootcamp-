function reverse(desiredNumber){
    singleDigit1=desiredNumber%10
    NumberDehgan1=((desiredNumber%100)-singleDigit1)/10
    hundredDigit1=((desiredNumber-(desiredNumber%100))%1000)/100

    hundredDigit2=singleDigit1*100
    NumberDehgan2=NumberDehgan1*10
    singleDigit2=hundredDigit1
    reverseNumber=singleDigit2+NumberDehgan2+hundredDigit2
    console.log("reverseNumber: "+reverseNumber);
}
reverse(392)
