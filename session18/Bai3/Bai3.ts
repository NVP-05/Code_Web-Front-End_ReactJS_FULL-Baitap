function cacheDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value; 
  
    const cache: { [key: string]: any } = {};
  
    descriptor.value = function (...args: any[]) {
      const key = JSON.stringify(args);
  
      if (key in cache) {
        console.log("Trả lại từ cache...");
        return cache[key]; 
      }
  
      console.log("Tính toán...");
      const result = originalMethod.apply(this, args); 
      cache[key] = result; 
  
      return result;
    };
  
    return descriptor; 
  }
  
  class Calculatort {
    @cacheDecorator
    add(a: number, b: number): number {
      return a + b; 
    }
  
    @cacheDecorator
    multiply(a: number, b: number): number {
      return a * b;
    }
  }
  
  const calculatort = new Calculatort();
  
  console.log(calculatort.add(2, 3)); 
  console.log(calculatort.add(2, 3)); 
  console.log(calculatort.multiply(2, 3)); 
  console.log(calculatort.multiply(2, 3)); 
  