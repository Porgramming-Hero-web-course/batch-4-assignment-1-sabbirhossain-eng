// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray(numbers: number[]):number {
    let totalNumbers =0;
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        totalNumbers += element;
        
    }
    return totalNumbers;
    
}

console.log(sumArray([1,2,3,4,5]));