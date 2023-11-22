function factorial(desiredNumber){
    var factorial=1
    for (let number = 1; number <=desiredNumber; number++) {
        factorial=factorial*number        
    }
    console.log("Factorial number: "+factorial);
}

factorial(10)