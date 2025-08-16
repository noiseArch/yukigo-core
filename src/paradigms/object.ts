import { Equation, Expression, SymbolPrimitive } from "../globals/generics.js";

export interface Method {
  identifier: SymbolPrimitive;
  equations: Equation[];
}

export interface Attribute {
  identifier: SymbolPrimitive;
  expression: Expression;
}

export interface Object {
  identifier: SymbolPrimitive;
  expression: Expression;
}

export interface Class {
  identifier: SymbolPrimitive;
  extends: SymbolPrimitive | undefined;
  implements: SymbolPrimitive | undefined;
  expression: Expression;
}

export interface Interface {
  identifier: SymbolPrimitive;
  extends: SymbolPrimitive[];
  expression: Expression;
}

export interface Send {
  receiver: Expression;
  selector: Expression;
  arguments: Expression[];
}

export interface New {
  identifier: SymbolPrimitive;
  arguments: Expression[];
}

export interface Implement {
  identifier: SymbolPrimitive;
}

export interface Include {
  identifier: SymbolPrimitive;
}
export interface Self {
  type: "Self";
}
