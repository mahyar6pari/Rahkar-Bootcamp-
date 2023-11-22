function mathOperation(desiredNumber){
    for (var number=desiredNumber ; number <20; number++) {
        powerTwo=Math.pow(number,2)
        powerThree=Math.pow(number,3)
        radical=Math.sqrt(number)
        console.log("number:"+number+" "+"powerTwo: "+powerTwo+" powerThree: "+powerThree+" radical: "+radical);

    }
}
mathOperation(1)