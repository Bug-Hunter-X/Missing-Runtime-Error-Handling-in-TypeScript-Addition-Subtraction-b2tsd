function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let x: number = 10;
let y: number = 5;

let sum = add(x, y);
let difference = subtract(x, y);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
// This code is correct and will run without errors. However, it lacks error handling for cases where the input is not a number.
// For example, if x or y is not a number, the code will throw a runtime error. To make the code more robust,
// we can add error handling to check for non-number input.  This is a subtle bug because the TypeScript compiler does not
// catch it since it's a runtime error not a compile-time error.

// Example of handling non-number input using type guards:
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Invalid input: arguments must be numbers');
  }
  return a + b;
}

function subtractSafe(a: any, b: any): number {
    if (!isNumber(a) || !isNumber(b)) {
      throw new Error('Invalid input: arguments must be numbers');
    }
    return a - b;
}