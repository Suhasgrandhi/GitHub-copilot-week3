const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

  describe('Modulo', () => {
    test('calculates remainder of division', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('returns zero when divisible', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('handles negative numbers', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('throws error when dividing by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot perform modulo with zero');
    });

    test('handles floating point numbers', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5, 5);
    });
  });

  describe('Power/Exponentiation', () => {
    test('raises base to exponent', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('handles base of zero', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('handles exponent of zero', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('handles negative exponent', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('handles floating point exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('handles negative base with even exponent', () => {
      expect(power(-3, 2)).toBe(9);
    });

    test('handles negative base with odd exponent', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('handles large exponents', () => {
      expect(power(10, 6)).toBe(1000000);
    });
  });

  describe('Square Root', () => {
    test('calculates square root of perfect squares', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('calculates square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('calculates square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('calculates square root of non-perfect squares', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('calculates square root of fractional numbers', () => {
      expect(squareRoot(0.25)).toBe(0.5);
    });

    test('throws error for negative numbers', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of negative number');
    });

    test('handles large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });
  });

  describe('Examples from GitHub Issue #3', () => {
    test('modulo example: 10 % 3 = 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('power example: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('square root example: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('power example: 3 ^ 2 = 9', () => {
      expect(power(3, 2)).toBe(9);
    });

    test('square root example: √25 = 5', () => {
      expect(squareRoot(25)).toBe(5);
    });
  });

  describe('Examples from calc-extended-operations.png', () => {
    test('modulo example: 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('power example: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('square root example: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });
  });

  describe('Extended Edge Cases for New Operations', () => {
    describe('Modulo Edge Cases', () => {
      test('modulo with same divisor', () => {
        expect(modulo(5, 5)).toBe(0);
      });

      test('modulo where dividend is smaller than divisor', () => {
        expect(modulo(2, 5)).toBe(2);
      });

      test('modulo with large numbers', () => {
        expect(modulo(1000000, 7)).toBe(1);
      });

      test('modulo with very small divisor', () => {
        expect(modulo(5, 0.5)).toBeCloseTo(0, 5);
      });

      test('modulo with negative dividend', () => {
        expect(modulo(-5, 2)).toBe(-1);
      });

      test('modulo with both negative numbers', () => {
        expect(modulo(-5, -2)).toBe(-1);
      });
    });

    describe('Power Edge Cases', () => {
      test('power of 1 to any exponent is 1', () => {
        expect(power(1, 100)).toBe(1);
      });

      test('any number to power 1 is itself', () => {
        expect(power(42, 1)).toBe(42);
      });

      test('power with fractional base and exponent', () => {
        expect(power(0.5, 2)).toBe(0.25);
      });

      test('power with very small exponent', () => {
        expect(power(2, 0.1)).toBeCloseTo(1.072, 3);
      });

      test('power of 2 with larger exponent', () => {
        expect(power(2, 10)).toBe(1024);
      });

      test('power with fractional base less than 1', () => {
        expect(power(0.5, 3)).toBe(0.125);
      });

      test('negative base with zero exponent', () => {
        expect(power(-5, 0)).toBe(1);
      });

      test('power result accuracy for common cases', () => {
        expect(power(2, 8)).toBe(256);
        expect(power(3, 4)).toBe(81);
        expect(power(5, 3)).toBe(125);
      });
    });

    describe('Square Root Edge Cases', () => {
      test('square root of 1', () => {
        expect(squareRoot(1)).toBe(1);
      });

      test('square root of 4', () => {
        expect(squareRoot(4)).toBe(2);
      });

      test('square root of 9', () => {
        expect(squareRoot(9)).toBe(3);
      });

      test('square root of 100', () => {
        expect(squareRoot(100)).toBe(10);
      });

      test('square root of very small positive number', () => {
        expect(squareRoot(0.0001)).toBe(0.01);
      });

      test('square root of very large number', () => {
        expect(squareRoot(10000000000)).toBe(100000);
      });

      test('throws error for -1', () => {
        expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of negative number');
      });

      test('throws error for -0.5', () => {
        expect(() => squareRoot(-0.5)).toThrow('Cannot calculate square root of negative number');
      });

      test('square root of decimal number', () => {
        expect(squareRoot(6.25)).toBe(2.5);
      });

      test('square root maintains precision', () => {
        const result = squareRoot(2);
        expect(result * result).toBeCloseTo(2, 10);
      });
    });

    describe('Combined Operations', () => {
      test('can chain modulo and power', () => {
        const powered = power(2, 3);
        const remainder = modulo(powered, 5);
        expect(remainder).toBe(3);
      });

      test('can chain power and square root', () => {
        const powered = power(4, 2);
        const root = squareRoot(powered);
        expect(root).toBe(4);
      });

      test('square root of a perfect square from power', () => {
        const squared = power(7, 2);
        const root = squareRoot(squared);
        expect(root).toBe(7);
      });

      test('modulo of power result', () => {
        const powered = power(5, 2);
        const result = modulo(powered, 6);
        expect(result).toBe(1);
      });
    });

    describe('Comprehensive Integration Tests', () => {
      test('power(2, 3) = 8, then modulo(8, 3) = 2', () => {
        const result1 = power(2, 3);
        expect(result1).toBe(8);
        const result2 = modulo(result1, 3);
        expect(result2).toBe(2);
      });

      test('sqrt(16) = 4, then power(4, 2) = 16', () => {
        const result1 = squareRoot(16);
        expect(result1).toBe(4);
        const result2 = power(result1, 2);
        expect(result2).toBe(16);
      });

      test('sqrt(36) = 6, then modulo(6, 5) = 1', () => {
        const result1 = squareRoot(36);
        expect(result1).toBe(6);
        const result2 = modulo(result1, 5);
        expect(result2).toBe(1);
      });

      test('modulo(5, 2) = 1, then power(1, 10) = 1', () => {
        const result1 = modulo(5, 2);
        expect(result1).toBe(1);
        const result2 = power(result1, 10);
        expect(result2).toBe(1);
      });
    });
  });
});
