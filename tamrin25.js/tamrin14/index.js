function pairNumbers(desiredNumber){
    let count=0
    let digit=0
    let evenPosition=0
    let OddPosition=0
    while(desiredNumber>1){
       
        digit=desiredNumber%10
        desiredNumber=(desiredNumber-digit)/10
        count++
        if (count%2==0 && digit%2==0) {
            evenPosition++
        }
        else if (count%2==1 && digit%2==0) {
            OddPosition++
        }
    }
    console.log("evenPosition: "+evenPosition);
    console.log("OddPosition: "+OddPosition);
}
pairNumbers(2424243)