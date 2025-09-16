import { Equation, Expression, SymbolPrimitive } from "../globals/generics.js";

export interface EntryPoint {
  type: "EntryPoint";
  identifier: SymbolPrimitive;
  expressions: Expression[];
}

export interface Procedure {
  type: "Procedure";
  identifier: SymbolPrimitive;
  expressions: Equation[];
}

export interface Enumeration {
  type: "Enumeration";
  identifier: SymbolPrimitive;
  contents: SymbolPrimitive[];
}

export interface While {
  type: "While";
  condition: Expression;
  body: Expression;
}
export interface Repeat {
  type: "Repeat";
  condition: Expression;
  body: Expression;
}

export interface ForLoop {
  type: "ForLoop";
  initialization: Expression;
  condition: Expression;
  update: Expression;
  body: Expression;
}
