let first = 5;
let second = 6;
console.log(first,second);
// const temp = first;
// first = second;
// second = temp;
[first, second] = [second, first];
console.log(first,second);