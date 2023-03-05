function maxArray(numbers){
    let lowest = numbers[0];
    for( let i = 0; i< numbers.length; i++){
        
        const index = i;
        const element = numbers[index];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
    
}
const heights = [168,178,145,198,1146];
const smallest = maxArray(heights);
console.log('smallest person is ',smallest);