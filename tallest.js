function maxArray(numbers){
    let largest = numbers[0];
    for( let i = 0; i< numbers.length; i++){
        
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
    
}
const heights = [168,178,145,198,1146];
const tallest = maxArray(heights);
console.log('tallest person is ',tallest);