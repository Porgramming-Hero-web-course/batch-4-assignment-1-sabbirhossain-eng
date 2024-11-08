// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
 
interface profile {
    name: string;
    age: number;
    email: string;
 }

 function updateProfile<T extends object>(profile: T, updates:Partial<T>): T {
   const updatedProfile = { ...profile };

   for (const key in updates) {
     
     if (updates[key] !== undefined) {
       updatedProfile[key as keyof T] = updates[key] as T[keyof T];
     }
   }
 
   return updatedProfile;
 };

 // Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));