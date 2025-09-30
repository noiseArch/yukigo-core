import {
  BodyExpression,
  Expression,
  Function,
  Equation,
  GuardedBody,
  UnguardedBody,
  SymbolPrimitive,
  If,
  Sequence,
  Return,
  Statement,
} from "../globals/generics.js";
import {
  ArithmeticBinaryOperation,
  ArithmeticBinaryOperator,
  ArithmeticUnaryOperation,
  ArithmeticUnaryOperator,
  AssignOperation,
  AssignOperator,
  ComparisonOperation,
  ComparisonOperatorType,
  ListBinaryOperation,
  ListBinaryOperator,
  ListUnaryOperation,
  ListUnaryOperator,
  UnifyOperation,
  UnifyOperator,
} from "../globals/operators.js";
import { Pattern } from "../globals/patterns.js";
import { Lambda } from "../paradigms/functional.js";
import {
  Exist,
  Fact,
  Findall,
  Forall,
  Not,
  Query,
  Rule,
} from "../paradigms/logic.js";
import { symbolPrimitive } from "./primitives.js";

// Logic

export function rule(
  atom: SymbolPrimitive,
  args: Pattern[],
  body: Expression[]
): Rule {
  return {
    type: "Rule",
    identifier: atom,
    patterns: args,
    expressions: body,
  };
}
export function fact(atom: SymbolPrimitive, args: Pattern[] | null): Fact {
  return {
    type: "Fact",
    identifier: atom,
    patterns: args ?? [],
  };
}
export function query(expressions: Expression[]): Query {
  return {
    type: "Query",
    expressions,
  };
}
export function exist(atom: SymbolPrimitive, args: Pattern[]): Exist {
  return {
    type: "Exist",
    identifier: atom,
    patterns: args,
  };
}
export function not(expressions: Expression[]): Not {
  return {
    type: "Not",
    expressions,
  };
}
export function findall(
  template: Expression,
  goal: Expression,
  bag: Expression
): Findall {
  return {
    type: "Findall",
    template,
    goal,
    bag,
  };
}
export function forall(condition: Expression, action: Expression): Forall {
  return {
    type: "Forall",
    condition,
    action,
  };
}

export const func = (name: string, ...declarations: Equation[]): Function => ({
  type: "Function",
  identifier: symbolPrimitive(name),
  equations: declarations,
});

export const sequence = (statements: Statement[]): Sequence => {
  return {
    type: "Sequence",
    statements,
  };
};
export const returnExpr = (body: BodyExpression | Expression): Return => {
  return {
    type: "Return",
    body: body.type === "Expression" ? body : expression(body),
  };
};

export const equation = (
  patterns: Pattern[],
  body: GuardedBody[] | UnguardedBody,
  returnExpr?: Return
): Equation => ({
  type: "Equation",
  patterns,
  body,
  return: returnExpr,
});

export const unguardedbody = (sequence: Sequence): UnguardedBody => ({
  type: "UnguardedBody",
  sequence,
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
export function ifThenElse(
  condition: Expression,
  then: Expression,
  elseExpr: Expression
): If {
  return {
    type: "If",
    condition,
    then,
    else: elseExpr,
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

export function listBinaryOp(
  operator: ListBinaryOperator,
  left: Expression,
  right: Expression
): ListBinaryOperation {
  return {
    type: "ListBinaryOperation",
    operator,
    left,
    right,
  };
}
export function listUnaryOp(
  operator: ListUnaryOperator,
  operand: Expression
): ListUnaryOperation {
  return {
    type: "ListUnaryOperation",
    operator,
    operand,
  };
}

export function assignmentOp(
  operator: AssignOperator,
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
  operator: UnifyOperator,
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
  operator: ArithmeticBinaryOperator,
  left: Expression,
  right: Expression
): ArithmeticBinaryOperation {
  return {
    type: "ArithmeticBinaryOperation",
    operator,
    left,
    right,
  };
}
export function arithmeticUnary(
  operator: ArithmeticUnaryOperator,
  operand: Expression
): ArithmeticUnaryOperation {
  return {
    type: "ArithmeticUnaryOperation",
    operator,
    operand,
  };
}

export function lambda(parameters: Pattern[], body: Expression): Lambda {
  return {
    type: "Lambda",
    parameters,
    body,
  };
}
