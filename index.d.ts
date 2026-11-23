export type Bit = 0 | 1;
export type LogicInput = Bit | boolean | number;

export function BUFFER(a: LogicInput): Bit;
export function NOT(a: LogicInput): Bit;
export function AND(...inputs: LogicInput[]): Bit;
export function OR(...inputs: LogicInput[]): Bit;
export function NAND(...inputs: LogicInput[]): Bit;
export function NOR(...inputs: LogicInput[]): Bit;
export function XOR(...inputs: LogicInput[]): Bit;
export function XNOR(...inputs: LogicInput[]): Bit;

export interface TruthTableRow<T = Bit | Record<string, Bit>> {
  inputs: Bit[];
  output: T;
}

export function truthTable<T = Bit>(
  numInputs: number,
  circuitFn: (...inputs: Bit[]) => T,
): TruthTableRow<T>[];

export function halfAdder(
  a: LogicInput,
  b: LogicInput,
): { sum: Bit; carry: Bit };
export function fullAdder(
  a: LogicInput,
  b: LogicInput,
  carryIn: LogicInput,
): { sum: Bit; carryOut: Bit };
