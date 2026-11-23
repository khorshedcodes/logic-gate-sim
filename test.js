const assert = require("assert");
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
} = require("./index");

// Test basic & universal gates
assert.strictEqual(BUFFER(1), 1);
assert.strictEqual(NOT(1), 0);
assert.strictEqual(AND(1, 1, 1), 1);
assert.strictEqual(AND(1, 0, 1), 0);
assert.strictEqual(OR(0, 0, 1), 1);
assert.strictEqual(NAND(1, 1), 0);
assert.strictEqual(NOR(0, 0), 1);
assert.strictEqual(XOR(1, 0), 1);
assert.strictEqual(XOR(1, 1), 0);
assert.strictEqual(XNOR(1, 1), 1);

// Test truth table generator (2-input XOR)
const xorTable = truthTable(2, (a, b) => XOR(a, b));
assert.deepStrictEqual(xorTable, [
  { inputs: [0, 0], output: 0 },
  { inputs: [0, 1], output: 1 },
  { inputs: [1, 0], output: 1 },
  { inputs: [1, 1], output: 0 },
]);

// Test Half Adder & Full Adder
assert.deepStrictEqual(halfAdder(1, 1), { sum: 0, carry: 1 });
assert.deepStrictEqual(fullAdder(1, 1, 1), { sum: 1, carryOut: 1 });

console.log("All logic gates and circuits passed!");
console.table(xorTable);
