function divisible(desiredNumber1,desiredNumber2){
    if (desiredNumber1>=desiredNumber2 ) {
        if (desiredNumber1%desiredNumber2==0) {
            console.log("are divisible");
        }
        else{
            console.log("They cannot be divided");
        }
        
    }
    else if(desiredNumber1<desiredNumber2){
        if (desiredNumber2%desiredNumber1==0) {
            console.log("are divisible");
        }
        else{
            console.log("They cannot be divided");
        }
    }
}
divisible(21,43)
