#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+): Add two or more numbers
 * - Subtraction (-): Subtract numbers
 * - Multiplication (*): Multiply numbers
 * - Division (/): Divide numbers (with division by zero handling)
 * - Modulo (%): Calculate remainder of division
 * - Exponentiation (^): Raise base to the power of exponent
 * - Square Root (√): Calculate square root of a number
 * 
 * Usage:
 *   calculator.js <operation> <number1> <number2> [number3] ...
 *   
 * Examples:
 *   calculator.js add 5 3 2
 *   calculator.js subtract 10 3
 *   calculator.js multiply 4 5
 *   calculator.js divide 20 4
 *   calculator.js modulo 10 3
 *   calculator.js power 2 3
 *   calculator.js sqrt 16
 */

// Exported functions for testing
function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function subtract(...numbers) {
  return numbers.reduce((acc, num) => acc - num);
}

function multiply(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

function divide(...numbers) {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      throw new Error('Cannot divide by zero');
    }
  }
  return numbers.reduce((quotient, num) => quotient / num);
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo with zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(n);
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error('Error: Invalid number of arguments');
    console.error('Usage: calculator.js <operation> <number1> [number2] ...');
    console.error('Operations: add, subtract, multiply, divide, modulo, power, sqrt');
    process.exit(1);
  }

  const operation = args[0].toLowerCase();
  const numbers = args.slice(1).map(num => parseFloat(num));

  // Validate that all inputs are valid numbers
  if (numbers.some(isNaN)) {
    console.error('Error: All arguments after operation must be valid numbers');
    process.exit(1);
  }

  let result;

  try {
    switch (operation) {
      case 'add':
      case '+':
        result = add(...numbers);
        console.log(`Result: ${result}`);
        break;

      case 'subtract':
      case '-':
        result = subtract(...numbers);
        console.log(`Result: ${result}`);
        break;

      case 'multiply':
      case '*':
        result = multiply(...numbers);
        console.log(`Result: ${result}`);
        break;

      case 'divide':
      case '/':
        result = divide(...numbers);
        console.log(`Result: ${result}`);
        break;

      case 'modulo':
      case 'mod':
      case '%':
        if (numbers.length !== 2) {
          throw new Error('Modulo operation requires exactly 2 numbers');
        }
        result = modulo(...numbers);
        console.log(`Result: ${result}`);
        break;

      case 'power':
      case 'pow':
      case '^':
        if (numbers.length !== 2) {
          throw new Error('Power operation requires exactly 2 numbers');
        }
        result = power(...numbers);
        console.log(`Result: ${result}`);
        break;

      case 'sqrt':
      case 'squareroot':
      case '√':
        if (numbers.length !== 1) {
          throw new Error('Square root operation requires exactly 1 number');
        }
        result = squareRoot(...numbers);
        console.log(`Result: ${result}`);
        break;

      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.error('Valid operations: add (+), subtract (-), multiply (*), divide (/), modulo (%), power (^), sqrt (√)');
        process.exit(1);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
