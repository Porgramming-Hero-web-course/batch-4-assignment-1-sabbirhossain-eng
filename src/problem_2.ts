// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

const removeDuplicate =(numbers:number[]) :number[] => {
    
    const filterNumbers = numbers.filter((value:number, index) => numbers.indexOf(value) === index);

    return filterNumbers;
    
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));