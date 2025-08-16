import { Equation, Expression, SymbolPrimitive } from "../globals/generics.js";

export interface EntryPoint {
  identifier: SymbolPrimitive;
  expressions: Expression[];
}

export interface Procedure {
  identifier: SymbolPrimitive;
  expressions: Equation[];
}

export interface Enumeration {
  identifier: SymbolPrimitive;
  contents: SymbolPrimitive[];
}

export interface While {
  condition: Expression;
  body: Expression;
}
export interface Repeat {
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
