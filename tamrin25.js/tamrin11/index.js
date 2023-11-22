function numberDigits(desiredNumber){
    var count=0
    while(desiredNumber>=1){
        count++
        desiredNumber=desiredNumber/10
    }
    console.log("number Of Digits: "+count);
}
numberDigits(1223324)