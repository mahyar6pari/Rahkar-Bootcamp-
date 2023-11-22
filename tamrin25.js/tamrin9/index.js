function divisorCalculator(desiredNumber){
    var count=0
    for (let number = 1; number < desiredNumber; number++) {
        if (desiredNumber%number==0) {
            count++
            console.log("Divisor"+count+": "+number);
        }
    }
}
divisorCalculator(100)