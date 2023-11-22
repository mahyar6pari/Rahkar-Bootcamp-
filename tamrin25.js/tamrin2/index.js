function evenNumbers(desiredNumber){
    var count=0
    for ( var number=desiredNumber; number < 1000 ;number++)
    {
        if(number%2==0){
            count++
            console.log("Number"+count+": "+number);
        }
    }
}
evenNumbers(101)