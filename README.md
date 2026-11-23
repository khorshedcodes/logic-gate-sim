# logic-gate-sim

Zero-dependency digital logic gates, automatic truth table generator, and combinational circuit simulator for JavaScript and TypeScript.

## Features

- **All Standard & Universal Gates:** `BUFFER`, `NOT`, `AND`, `OR`, `NAND`, `NOR`, `XOR`, `XNOR`
- **Flexible Inputs:** Accepts `1`/`0` or `true`/`false`, and supports 2 or more inputs on multi-input gates
- **Truth Table Generator:** Automatically generates all $2^n$ combinations and outputs for any custom circuit function
- **Combinational Circuits:** Built-in `halfAdder` and `fullAdder`
- **TypeScript Ready:** Includes built-in `.d.ts` type definitions with zero external dependencies

## Installation

```bash
npm install logic-gate-sim
```

## Quick Start

```javascript
const {
  BUFFER,
  NOT,
  AND,
  OR,
  NAND,
  NOR,
  XOR,
  XNOR,
  truthTable,
  halfAdder,
  fullAdder,
} = require("logic-gate-sim");

// 1. Evaluate logic gates (accepts 1/0 or true/false, supports 2+ inputs)
console.log(AND(1, 1, 1)); // 1
console.log(NAND(1, 1)); // 0
console.log(XOR(1, 0, 1)); // 0
console.log(NOT(true)); // 0

// 2. Generate a complete truth table for any custom circuit: (A AND B) OR (NOT C)
const table = truthTable(3, (a, b, c) => OR(AND(a, b), NOT(c)));
console.table(table);

// 3. Built-in Half Adder & Full Adder
console.log(halfAdder(1, 1)); // { sum: 0, carry: 1 }
console.log(fullAdder(1, 1, 1)); // { sum: 1, carryOut: 1 }
```

## API Reference

### Logic Gates

All gates return `0` or `1` and accept `0`, `1`, `true`, or `false`.

| Function          | Description                            | Example        | Output |
| :---------------- | :------------------------------------- | :------------- | :----- |
| `BUFFER(a)`       | Passes input bit unchanged             | `BUFFER(1)`    | `1`    |
| `NOT(a)`          | Inverts input bit                      | `NOT(1)`       | `0`    |
| `AND(...inputs)`  | `1` if all inputs are `1`              | `AND(1, 1, 0)` | `0`    |
| `OR(...inputs)`   | `1` if at least one input is `1`       | `OR(0, 0, 1)`  | `1`    |
| `NAND(...inputs)` | Inverted `AND`                         | `NAND(1, 1)`   | `0`    |
| `NOR(...inputs)`  | Inverted `OR`                          | `NOR(0, 0)`    | `1`    |
| `XOR(...inputs)`  | `1` if an odd number of inputs are `1` | `XOR(1, 0, 1)` | `0`    |
| `XNOR(...inputs)` | Inverted `XOR`                         | `XNOR(1, 1)`   | `1`    |

### `truthTable(numInputs, circuitFn)`

Generates all $2^n$ input rows and evaluates `circuitFn(...inputs)` for each combination.

```javascript
const xorTable = truthTable(2, (a, b) => XOR(a, b));
// [
//   { inputs: [0, 0], output: 0 },
//   { inputs: [0, 1], output: 1 },
//   { inputs: [1, 0], output: 1 },
//   { inputs: [1, 1], output: 0 }
// ]
```

### Adders

- `halfAdder(a, b)` → returns `{ sum, carry }`
- `fullAdder(a, b, carryIn)` → returns `{ sum, carryOut }`

## License

MIT
