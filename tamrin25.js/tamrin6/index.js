function greatestDivisor(desiredNumber1,desiredNumber2){
    var count=0
    var divisors=[]
    if (desiredNumber1<desiredNumber2) {
        for (let number2 = desiredNumber2; number2 >0 ; number2--) {
            if (desiredNumber2%number2==0) {
                for (let number1 =desiredNumber1; number1 > 0; number1--) {
                    if (desiredNumber1%number1==0) {
                        if (number2==number1) {
                            divisors[count]=number2
                            count++
                         }     
                    }
                    
                }
            }      
        }
    }
    else if (desiredNumber2<desiredNumber1) {
        for (let number1 = desiredNumber1; number1 >0 ; number1--) {
            if (desiredNumber1%number1==0) {
                for (let number2 =desiredNumber2; number2 > 0; number2--) {
                    if (desiredNumber2%number2==0) {
                        if (number2==number1) {
                            divisors[count]=number2
                            count++
                         }     
                    }
                    
                }
            }      
        }
    }
    else if (desiredNumber1==desiredNumber2) {
        divisors[count]=desiredNumber1
    }
    console.log("Greatest Common Divisor: "+divisors[0]);
}
greatestDivisor(60,100)