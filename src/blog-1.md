# TypeScript Union and Intersection types.
Union and Intersection Types in TypeScript give you the flexibility of a duck while still keeping track of its feet, making your code more robust and maintainable.

## Union Types (|)
**Union Types:** A Union Type enables some variable to hold one out of many possible types. It is ideal for situations where a value could be either one type or another, but you want to enforce even stricter type-safety.


 ```typescript
   let value: string | number;
    value = "Hello";
    value = 42;
```
##Why Use Union Types?

- **Flexible:** A single variable can be of different types

- **Type Safety:** Guarantees that variables can only be assigned values of the appropriate type.

- **Manage Complex Data:** Helpful when using external data (i.e., from APIs) where the types are unknown.

##Intersection Types (&)

An Intersection Type is basically a combination of types into one type. All properties of the intersected types are in the resulting type.

```typescript
interface Person { name: string; age: number; }
interface Contact { email: string; }

type Employee = Person & Contact;
const emp: Employee = { name: "John", age: 30, email: "john@example.com" };

```

##Why Use Intersection Types?

- **Different Types Combined:** Some properties will be a combination of other types

- **Type Composition:** Composes complex and specific types.

- **Functionality Extension:** These are to modify the functionality like add new behavior while keeping their old structure intact.

##When to Use:

- **Union Types** (when a variable may be string | number);

- **Intersection Types: **A type that combines individual types into a single type (ex, merging interfaces)

Together, Union and Intersection types can be used in TypeScript to write flexible yet type-safe code. A better understanding of their use cases is going to make your application more maintainable and scalable.

------------