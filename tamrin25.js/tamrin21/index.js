function DivisorEquality(desiredNumberStart,desiredNumberEnd) {
    let sum=0
    let Divisors=[]
    let numbers=[]
    for (let i = desiredNumberStart; i < desiredNumberEnd; i++){
        for (let k = 1; k < i; k++) {
            if (i%k==0) {
                sum+=k
            }
        }
        Divisors.push(sum)
        numbers.push(i)
        sum=0
    }
    for (let i = 0; i < numbers.length; i++) {
        for (let k = i+1; k < Divisors.length; k++) {
            if (numbers[i]==Divisors[k]) {
                if (numbers[k]==Divisors[i]) {
                    console.log("Sum of divisors",numbers[i]," ",numbers[k]);
                }
            }
            
        }  
    }
}
DivisorEquality(10,1500)