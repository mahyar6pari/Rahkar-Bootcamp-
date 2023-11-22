function Repetitious(number1,number2,number3,number4,number5,number6,number7,number8,number9,number10) {
   let numbers=[number1,number2,number3,number4,number5,number6,number7,number8,number9,number10]
   let count=0
   let repeatCount=[]
   let number=[]
   let Repetitious=0
   for (let i = 0; i < numbers.length; i++) {
    for (let k = i; k < numbers.length; k++) {
        if (numbers[i]==numbers[k]) {
            count++
        }
    }
    if (count>1) {
        number.push(numbers[i])
        for (let j = 0; j < number.length; j++) {
            if (number[j]==numbers[i]) {
                Repetitious+=1
            }
            
        }
        if (Repetitious<2) {
            repeatCount.push(count)
        }
    }
    count=0
    Repetitious=0
   }
   for (let i = 0; i < number.length ; i++) {
    for (let j = i+1; j < number.length; j++) {
        if (number[i]==number[j]) {
            number.splice(j,1)
        }
        
    }
   }
   for (let i = 0; i < number.length; i++) {
    console.log("number: "+number[i],"Repeat Count: ",repeatCount[i]);
   }
   console.log("numbers: "+number);
   console.log("Number of repeating numbers: "+repeatCount.length);


}
Repetitious(1,2,3,3,7,2,2,1,7,7)