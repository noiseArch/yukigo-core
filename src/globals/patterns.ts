import { BooleanPrimitive, CharPrimitive, NumberPrimitive, StringPrimitive, SymbolPrimitive } from "./generics.js";

export interface VariablePattern {
  type: "VariablePattern";
  name: SymbolPrimitive;
}

export interface LiteralPattern {
  type: "LiteralPattern";
  name: NumberPrimitive | CharPrimitive | StringPrimitive | BooleanPrimitive;
}
export interface InfixApplicationPattern {
  type: "InfixApplicationPattern";
  left: Pattern;
  constructor: string;
  right: Pattern;
}
export interface ApplicationPattern {
  type: "ApplicationPattern";
  symbol: SymbolPrimitive;
  args: Pattern[];
}

export interface TuplePattern {
  type: "TuplePattern";
  elements: Pattern[];
}

export interface ListPattern {
  type: "ListPattern";
  elements: Pattern[];
}

export interface FunctorPattern {
  type: "FunctorPattern";
  identifier: SymbolPrimitive;
  args: Pattern[];
}

export interface AsPattern {
  type: "AsPattern";
  alias: VariablePattern | WildcardPattern;
  pattern: Pattern;
}

export interface WildcardPattern {
  type: "WildcardPattern";
  name: "_";
}

export interface UnionPattern {
  type: "UnionPattern";
  patterns: Pattern[];
}

export interface ConstructorPattern {
  type: "ConstructorPattern";
  constructor: string;
  patterns: Pattern[];
}

export interface ConsPattern {
  type: "ConsPattern";
  head: Pattern;
  tail: Pattern;
}

export type Pattern =
  | VariablePattern
  | LiteralPattern
  | WildcardPattern
  | ConstructorPattern
  | ListPattern
  | ConsPattern
  | AsPattern
  | TuplePattern;
