// Normalize 1/0 or true/false into 1 or 0
const toBit = (val) => (val ? 1 : 0);

// 1. Basic & Universal Logic Gates
const BUFFER = (a) => toBit(a);

const NOT = (a) => (toBit(a) === 1 ? 0 : 1);

const AND = (...inputs) => (inputs.every((v) => toBit(v) === 1) ? 1 : 0);

const OR = (...inputs) => (inputs.some((v) => toBit(v) === 1) ? 1 : 0);

const NAND = (...inputs) => NOT(AND(...inputs));

const NOR = (...inputs) => NOT(OR(...inputs));

const XOR = (...inputs) => inputs.reduce((acc, val) => acc ^ toBit(val), 0);

const XNOR = (...inputs) => NOT(XOR(...inputs));

// 2. Automatic Truth Table Generator
function truthTable(numInputs, circuitFn) {
  const rows = [];
  const totalCombinations = 1 << numInputs; // 2^n

  for (let i = 0; i < totalCombinations; i++) {
    const inputs = [];
    for (let bit = numInputs - 1; bit >= 0; bit--) {
      inputs.push((i >> bit) & 1);
    }
    const output = circuitFn(...inputs);
    rows.push({ inputs, output });
  }

  return rows;
}

// 3. Combinational Circuits (Adders)
function halfAdder(a, b) {
  return {
    sum: XOR(a, b),
    carry: AND(a, b),
  };
}

function fullAdder(a, b, carryIn) {
  const first = halfAdder(a, b);
  const second = halfAdder(first.sum, carryIn);
  return {
    sum: second.sum,
    carryOut: OR(first.carry, second.carry),
  };
}

module.exports = {
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
};
