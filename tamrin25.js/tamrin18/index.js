function  primeNumbers(desiredNumberStart,desiredNumberEnd){
    let beingForgiving=0
    for (let number = desiredNumberStart; number <=desiredNumberEnd; number++) {
        for (let i = 2; i < number; i++) {
            if (number%i==0) {
                beingForgiving=i
            }
            
        }
        if (beingForgiving==0) {
            console.log("number: "+number);
        }
        else{
            beingForgiving=0
        }
    }
}

primeNumbers(100,999)