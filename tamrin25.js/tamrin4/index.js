function oddNumbers(desiredNumber){
    var count=0
for (let number = 1; number < desiredNumber; number++) {
    if(number%2==1){
        count++
        console.log("Number"+count+": "+number);
    }
}
}
oddNumbers(26)