const Calculator = require('./calculator');
let calculator = new Calculator();
test('check if adding works properly for small numbers', () => {
    expect(calculator.add(3, 6)).toBe(9);
  });  
  test('check if adding works properly for sub-unit numbers', () => {
    expect(calculator.add(0.4, 0.2)).toBeCloseTo(0.6);
  }); 
  test('check if substracting works properly for sub-unit numbers', () => {
    expect(calculator.substract(0.4, 0.2)).toBeCloseTo(0.2);
  }); 
  test('check if substracting works properly for small numbers', () => {
    expect(calculator.substract(14, 4)).toBe(10);
  }); 
  test('check if multiplying works properly for small numbers', () => {
    expect(calculator.multiply(5, 50)).toBe(250);
  });  
  test('check if multiplying works properly for sub-unit numbers', () => {
    expect(calculator.multiply(0.1, 5)).toBeCloseTo(0.5);
  });  
  test('check if dividing works properly for small numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });  
  test('check if dividing works properly for sub-unit numbers', () => {
    expect(calculator.divide(2, 0.1)).toBe(20);
  });  
  test('check if dividing works properly for prime numbers', () => {
    expect(calculator.divide(1731, 11)).toBeCloseTo(157.363636364);
  });  