function logFunctionDetails(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value; 
  
    descriptor.value = function (...args: any[]) {
      console.log(`Called function: ${key}`); 
      console.log(`Arguments: ${JSON.stringify(args)}`); 
      const result = originalMethod.apply(this, args); 
      console.log(`Result: ${JSON.stringify(result)}`);
      return result;
    };
  
    return descriptor;
  }
  
  class Calculator {
    @logFunctionDetails
    add(a: number, b: number): number {
      return a + b;
    }
  
    @logFunctionDetails
    subtract(a: number, b: number): number {
      return a - b;
    }
  }
  
  const calculator = new Calculator();
  calculator.add(5, 3);
  calculator.subtract(10, 4); 
  