interface Square {
    kind: 'square';
    sideLength: number;
  }
  
  interface Circle {
    kind: 'circle';
    radius: number;
  }
  
  type Shape = Square | Circle;
  
  function isSquare(shape: Shape): shape is Square {
    return shape.kind === 'square';
  }
  
  function calculateSquareArea(square: Square): number {
    return square.sideLength ** 2;
  }
  
  function calculateCircleArea(circle: Circle): number {
    return Math.PI * circle.radius ** 2;
  }
  
  function calculateArea(shape: Shape): number {
    if (isSquare(shape)) {
      return calculateSquareArea(shape);
    } else {
      return calculateCircleArea(shape);
    }
  }
  
  const square: Square = { kind: 'square', sideLength: 5 };
  const circle: Circle = { kind: 'circle', radius: 3 };
  
  console.log('Diện tích của hình vuông:', calculateArea(square));
  console.log('Diện tích của hình tròn:', calculateArea(circle));
  