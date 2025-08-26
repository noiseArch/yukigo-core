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
  SymbolPrimitive,
} from "../globals/generics.js";
import { Pattern } from "../globals/patterns.js";
import {
  Clause,
  Exist,
  Fact,
  Findall,
  Forall,
  Not,
  Program,
  Query,
  Rule,
} from "../paradigms/logic.js";
import { symbolPrimitive } from "./primitives.js";

// Logic

export const program = (declarations: Clause[]): Program => ({
  type: "Program",
  clauses: declarations,
});

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
