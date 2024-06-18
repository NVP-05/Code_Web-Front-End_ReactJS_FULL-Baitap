function chainDecorator(...funcs: ((arg: any) => any)[]) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value; 
  
      descriptor.value = function (...args: any[]) {
        let result = originalMethod.apply(this, args);
  
        for (const func of funcs) {
          result = func(result);
        }
  
        return result; 
      };
  
      return descriptor; 
    };
  }
  
  function double(value: number): number {
    return value * 2; 
  }
  
  function square(value: number): number {
    return value * value; 
  }
 
  class Calculatorss {
    @chainDecorator(double, square) 
    add(a: number, b: number): number {
      return a + b; 
    }
  
    @chainDecorator(square, double)
    multiply(a: number, b: number): number {
      return a * b;
    }
  }
  
  const calculatorss = new Calculatorss();
  
  console.log(calculatorss.add(2, 3)); 
  console.log(calculatorss.multiply(3, 4)); 
  