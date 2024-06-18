function validationDecorator(validationFunction: (args: any[]) => boolean, errorMessage: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value; 
  
      descriptor.value = function (...args: any[]) {
        const isValid = validationFunction(args);
  
        if (!isValid) {
          throw new Error(errorMessage); 
        }
  
        return originalMethod.apply(this, args);
      };
  
      return descriptor; 
    };
  }
  
  function isAllNumbers(args: any[]): boolean {
    return args.every(arg => typeof arg === "number");
  }
  
  class Calculators {
    @validationDecorator(isAllNumbers, "Tất cả tham số phải là số.") 
    add(a: number, b: number): number {
      return a + b;
    }
  
    @validationDecorator(isAllNumbers, "Tất cả tham số phải là số.")
    multiply(a: number, b: number): number {
      return a * b; 
    }
  }
  
  const calculators = new Calculators();
  
  console.log(calculators.add(2, 3));
  console.log(calculators.multiply(3, 4)); 
  
  try {
    calculators.add(2, "b"); 
  } catch (e) {
    console.error(e.message); 
  }
  
  try {
    calculators.multiply("a", 4); 
  } catch (e) {
    console.error(e.message); 
  }
  