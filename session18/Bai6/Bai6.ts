function typeCheckDecorator(expectedTypes: any[]) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value; 
  
      descriptor.value = function (...args: any[]) {
        args.forEach((arg, index) => {
          const expectedType = expectedTypes[index];
          
          if (typeof arg !== expectedType) {
            throw new Error(
              `Lỗi: Tham số tại vị trí ${index} trong hàm "${propertyKey}" phải là kiểu ${expectedType}, nhưng nhận được kiểu ${typeof arg}.`
            );
          }
        });
  
        return originalMethod.apply(this, args);
      };
  
      return descriptor; 
    };
  }
  
  class Calculatora {
    @typeCheckDecorator(['number', 'number']) 
    add(a: number, b: number): number {
      return a + b; 
    }
  
    @typeCheckDecorator(['string', 'string']) 
    concat(a: string, b: string): string {
      return a + b; 
    }
  }
  
  const calculatora = new Calculatora();
  
  console.log(calculatora.add(2, 3)); 
  
  try {
    calculatora.add(2, "3"); 
  } catch (e) {
    console.error(e.message); 
  }
  
  console.log(calculatora.concat("Hello", "World")); 
  
  try {
    calculatora.concat("Hello", 123); 
  } catch (e) {
    console.error(e.message);
  }
  