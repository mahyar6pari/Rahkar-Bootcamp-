function sumOfTheDivisors(desiredNumberFirst,desiredNumberEnd){
    var sum
    for (let number = desiredNumberFirst; number < desiredNumberEnd; number++) {
        sum=0
        for (let index = 1; index <= number; index++) {
            if (number%index==0) {
                sum+=index
            }
            if (number==index && number==sum/2) {
                console.log("number: "+number);
            }
        }
        
    }
}
sumOfTheDivisors(1,999)