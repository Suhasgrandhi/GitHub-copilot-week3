const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds multiple numbers', () => {
      expect(add(2, 3, 5)).toBe(10);
    });

    test('adds negative numbers', () => {
      expect(add(-5, 3)).toBe(-2);
    });

    test('adds zero', () => {
      expect(add(0, 5)).toBe(5);
    });

    test('adds floating point numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });

    test('adds single number', () => {
      expect(add(5)).toBe(5);
    });

    test('adds zero with zero', () => {
      expect(add(0, 0)).toBe(0);
    });
  });

  describe('Subtraction', () => {
    test('subtracts two numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('subtracts multiple numbers in sequence', () => {
      expect(subtract(10, 3, 2)).toBe(5);
    });

    test('subtracts resulting in negative', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('subtracts negative numbers', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('subtracts floating point numbers', () => {
      expect(subtract(10.5, 4.5)).toBe(6);
    });

    test('subtracts from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('subtracts zero from number', () => {
      expect(subtract(10, 0)).toBe(10);
    });

    test('subtracts single number returns itself', () => {
      expect(subtract(5)).toBe(5);
    });
  });

  describe('Multiplication', () => {
    test('multiplies two numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('multiplies multiple numbers', () => {
      expect(multiply(2, 3, 4)).toBe(24);
    });

    test('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('multiplies negative numbers', () => {
      expect(multiply(-5, 3)).toBe(-15);
    });

    test('multiplies two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('multiplies floating point numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('multiplies by one', () => {
      expect(multiply(5, 1)).toBe(5);
    });

    test('multiplies single number returns itself', () => {
      expect(multiply(5)).toBe(5);
    });
  });

  describe('Division', () => {
    test('divides two numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('divides multiple numbers in sequence', () => {
      expect(divide(100, 5, 2)).toBe(10);
    });

    test('divides resulting in decimal', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test('divides negative numbers', () => {
      expect(divide(-20, 5)).toBe(-4);
    });

    test('divides two negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('divides by one', () => {
      expect(divide(10, 1)).toBe(10);
    });

    test('divides zero by number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('throws error when dividing by zero', () => {
      expect(() => divide(20, 0)).toThrow('Cannot divide by zero');
    });

    test('throws error when any divisor is zero', () => {
      expect(() => divide(100, 5, 0)).toThrow('Cannot divide by zero');
    });

    test('divides single number returns itself', () => {
      expect(divide(5)).toBe(5);
    });

    test('divides floating point numbers', () => {
      expect(divide(10.5, 3.5)).toBeCloseTo(3, 1);
    });
  });

  describe('Examples from calc-basic-operations.png', () => {
    test('example 1: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('example 2: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('example 3: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('example 4: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });

  describe('Edge Cases and Error Handling', () => {
    test('handles very large numbers in addition', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });

    test('handles very small floating point numbers', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003, 5);
    });

    test('handles scientific notation', () => {
      expect(multiply(1e6, 2)).toBe(2000000);
    });

    test('division by zero in first operation throws error', () => {
      expect(() => divide(0, 0)).toThrow('Cannot divide by zero');
    });

    test('handles multiple operations in sequence', () => {
      const a = add(2, 3);
      const b = multiply(a, 2);
      expect(b).toBe(10);
    });
  });
});
