// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

interface Circle {
    shape :"circle";
    radius: number;
};
interface Rectangle {
    shape :"rectangle";
    width: number;
    height: number;
};

type name= Circle | Rectangle;

function calculateShapeArea(shape: name) : number {
    if (shape.shape === "circle" ) {
        return  Math.PI* shape.radius * shape.radius;
        
    } else {
        return shape.width * shape.height;
    }
    
}

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

console.log(circleArea);

// Sample Input 2:
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(rectangleArea);
  