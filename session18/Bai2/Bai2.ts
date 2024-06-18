function timingDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      const start = Date.now();
  
      const result = originalMethod.apply(this, args);
  
      const end = Date.now();
  
      const executionTime = end - start;
  
      console.log(
        `Hàm "${propertyKey}" được gọi với các tham số: ${JSON.stringify(args)}. Thời gian thực thi: ${executionTime} ms. Kết quả trả về: ${JSON.stringify(result)}`
      );
  
      return result;
    };
  
    return descriptor;
  }
  
  class Calculatorr {
    @timingDecorator
    add(a: number, b: number): number {
      return a + b;
    }
  
    @timingDecorator
    multiply(a: number, b: number): number {
      return a * b;
    }
  }
  
  const calculatorr = new Calculator();
  
  calculatorr.add(10, 20);
  calculatorr.multiply(5, 4);
  