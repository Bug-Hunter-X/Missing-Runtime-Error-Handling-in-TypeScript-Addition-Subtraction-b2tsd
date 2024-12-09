# Missing Runtime Error Handling in TypeScript

This repository demonstrates a common, yet subtle, error in TypeScript: the lack of explicit runtime error handling for cases where input types don't match expectations, even when type annotations are present.  The TypeScript compiler will not catch such errors.

## The Bug
The `bug.ts` file contains functions for addition and subtraction with number type annotations.  However, if non-numeric values are passed to these functions, the program will throw a runtime error rather than gracefully handling the invalid input.

## The Solution
The `bugSolution.ts` file addresses this issue by adding type guards to check for numeric input before performing arithmetic operations. If non-numeric input is detected, an appropriate error is thrown, preventing unexpected runtime failures.

This example highlights the importance of considering runtime error handling alongside compile-time type safety in TypeScript applications.