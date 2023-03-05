function reverseString(text){
    let reversed = '';
    for(let i =text.length-1; i>=0; i--){
        const element = text[i];
        reversed = reversed + element;
        console.log( reversed);
    }
    return reversed;
}

const myString = 'i am a good boi';
const reversedString = reverseString(myString);
console.log('reversed output :', reversedString);