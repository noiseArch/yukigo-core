import {
  BodyExpression,
  Expression,
  SymbolPrimitive,
} from "../globals/generics.js";
import { Pattern } from "../globals/patterns.js";

// expressions

export interface FunctionExpression {
  type: "FunctionExpression";
  name: SymbolPrimitive;
  parameters: SymbolPrimitive[];
}

export interface CompositionExpression {
  type: "CompositionExpression";
  left: SymbolPrimitive;
  right: SymbolPrimitive;
}

export interface Lambda {
  type: "Lambda";
  parameters: Pattern[];
  body: Expression;
}
export interface Yield {
  type: "Yield";
  expression: Expression;
}

export interface Return {
  type: "Return";
  body: Expression;
}

export interface InfixApplicationExpression {
  type: "InfixApplication";
  operator: SymbolPrimitive;
  left: Expression;
  right: Expression;
}

export interface Application {
  type: "Application";
  function: Expression;
  parameter: Expression | BodyExpression;
}
