import {
  BodyExpression,
  Expression,
  ComparisonOperatorType,
  ComparisonOperation,
  AssignOperatorType,
  AssignOperation,
  UnifyOperatorType,
  UnifyOperation,
  ArithmeticOperatorType,
  ArithmeticOperation,
  Function,
  Equation,
  GuardedBody,
  UnguardedBody,
} from "../globals/generics.js";
import { Pattern } from "../globals/patterns.js";
import { symbolPrimitive } from "./primitives.js";

export const func = (name: string, ...declarations: Equation[]): Function => ({
  type: "Function",
  identifier: symbolPrimitive(name),
  equations: declarations,
});

export const equation = (
  patterns: Pattern[],
  body: GuardedBody[] | UnguardedBody
): Equation => ({
  type: "Equation",
  patterns,
  body,
});

export const unguardedbody = (expression: Expression): UnguardedBody => ({
  type: "UnguardedBody",
  expression,
});
export const guardedbody = (
  condition: Expression,
  body: Expression
): GuardedBody => ({
  type: "GuardedBody",
  condition,
  body,
});

export function expression(body: BodyExpression): Expression {
  return {
    type: "Expression",
    body,
  };
}

export function comparisonOp(
  operator: ComparisonOperatorType,
  left: Expression,
  right: Expression
): ComparisonOperation {
  return {
    type: "ComparisonOperation",
    operator,
    left,
    right,
  };
}

export function assignmentOp(
  operator: AssignOperatorType,
  left: Expression,
  right: Expression
): AssignOperation {
  return {
    type: "AssignOperation",
    operator,
    left,
    right,
  };
}

export function unifyOp(
  operator: UnifyOperatorType,
  left: Expression,
  right: Expression
): UnifyOperation {
  return {
    type: "UnifyOperation",
    operator,
    left,
    right,
  };
}

export function arithmetic(
  operator: ArithmeticOperatorType,
  left: Expression,
  right: Expression
): ArithmeticOperation {
  return {
    type: "ArithmeticOperation",
    operator,
    left,
    right,
  };
}
