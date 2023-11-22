function Accountant(number1,number2,number3,number4,number5){
    var count=0
    var sum=0
    var numbers=[number1,number2,number3,number4,number5]
    for (let index = 0; index < numbers.length; index++) {
        if(numbers[index]>0){
            count++
        }
        else if(numbers[index]<0){
            sum+=numbers[index]
        }
    }
    console.log(count);
    console.log(sum);
}
Accountant(1,5,-6,12,-7)