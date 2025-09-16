import { Equation, Expression, SymbolPrimitive } from "../globals/generics.js";

export interface Method {
  type: "Method";
  identifier: SymbolPrimitive;
  equations: Equation[];
}

export interface Attribute {
  type: "Attribute";
  identifier: SymbolPrimitive;
  expression: Expression;
}

export interface Object {
  type: "Object";
  identifier: SymbolPrimitive;
  expression: Expression;
}

export interface Class {
  type: "Class";
  identifier: SymbolPrimitive;
  extends: SymbolPrimitive | undefined;
  implements: SymbolPrimitive | undefined;
  expression: Expression;
}

export interface Interface {
  type: "Interface";
  identifier: SymbolPrimitive;
  extends: SymbolPrimitive[];
  expression: Expression;
}

export interface Send {
  type: "Send";
  receiver: Expression;
  selector: Expression;
  arguments: Expression[];
}

export interface New {
  type: "New";
  identifier: SymbolPrimitive;
  arguments: Expression[];
}

export interface Implement {
  type: "Implement";
  identifier: SymbolPrimitive;
}

export interface Include {
  type: "Include";
  identifier: SymbolPrimitive;
}
export interface Self {
  type: "Self";
}
