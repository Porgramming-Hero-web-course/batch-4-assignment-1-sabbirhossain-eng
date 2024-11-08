// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

type person ={
    name: string;
    age: number;
}

function getProperty<T extends {"name" : string}, K extends keyof T>(Obj: T, key: K): T[K] {

    return Obj[key];
    
}

// Sample Input:
const person = { name: "Alice", age: 30 };

console.log(getProperty(person, "name"));