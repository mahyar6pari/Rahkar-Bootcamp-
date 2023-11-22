function  reverse(Word) {
    var reverse=""
    for (let i=Word.length-1; i >= 0; i--) {
        reverse+=Word[i]
        
    }
    console.log(reverse);
}
reverse("HelloWorled")