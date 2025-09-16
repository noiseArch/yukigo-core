import { Expression, Primitive, SymbolPrimitive } from "../globals/generics.js";
import { Pattern } from "../globals/patterns.js";

export type Clause = Rule | Fact | Query | Primitive;

export interface Rule {
  type: "Rule";
  identifier: SymbolPrimitive;
  patterns: Pattern[];
  expressions: Expression[];
}

export interface Fact {
  type: "Fact";
  identifier: SymbolPrimitive;
  patterns: Pattern[];
}

export interface Query {
  type: "Query";
  expressions: Expression[];
}

export interface Exist {
  type: "Exist";
  identifier: SymbolPrimitive;
  patterns: Pattern[];
}

export interface Not {
  type: "Not";
  expressions: Expression[];
}
export interface Findall {
  type: "Findall";
  template: Expression;
  goal: Expression;
  bag: Expression;
}
export interface Forall {
  type: "Forall";
  condition: Expression;
  action: Expression;
}

export interface GoalExpression {
  type: "Goal";
  identifier: SymbolPrimitive;
  arguments: Pattern[];
}
