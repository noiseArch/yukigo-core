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
  parameters: Expression[];
}

export interface CompositionExpression {
  type: "CompositionExpression";
  left: Expression;
  right: Expression;
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

export function application(
  func: Expression,
  parameter: Expression
): Application {
  return {
    type: "Application",
    function: func,
    parameter,
  };
}
