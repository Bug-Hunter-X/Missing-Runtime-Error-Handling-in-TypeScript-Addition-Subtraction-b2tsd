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

let x: any = 10;
let y: any = 5;

let sum = addSafe(x, y);
let difference = subtractSafe(x, y);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);

//Test with non-number inputs
let z: any = "hello";
//This will throw error
//let sum2 = addSafe(x, z);
//let difference2 = subtractSafe(x, z);