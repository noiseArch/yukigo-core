import {
  BooleanPrimitive,
  CharPrimitive,
  NumberPrimitive,
  StringPrimitive,
  SymbolPrimitive,
} from "../globals/generics.js";
import {
  LiteralPattern,
  WildcardPattern,
  Pattern,
  FunctorPattern,
  VariablePattern,
  ListPattern,
  ConsPattern,
  TuplePattern,
} from "../globals/patterns.js";

export function literalPattern(
  name:
    | SymbolPrimitive
    | NumberPrimitive
    | StringPrimitive
    | CharPrimitive
    | BooleanPrimitive
): LiteralPattern {
  return {
    type: "LiteralPattern",
    name,
  };
}
export function wildcardPattern(): WildcardPattern {
  return {
    type: "WildcardPattern",
    name: "_",
  };
}
export function functorPattern(
  name: SymbolPrimitive,
  args: Pattern[]
): FunctorPattern {
  return {
    type: "FunctorPattern",
    identifier: name,
    args,
  };
}
export function varPattern(name: SymbolPrimitive): VariablePattern {
  return {
    type: "VariablePattern",
    name,
  };
}
export function listPattern(elements: Pattern[]): ListPattern {
  return {
    type: "ListPattern",
    elements,
  };
}
export function consPattern(head: Pattern, tail: Pattern): ConsPattern {
  return {
    type: "ConsPattern",
    head,
    tail,
  };
}

export function tuplePattern(elements: Pattern[]): TuplePattern {
  return {
    type: "TuplePattern",
    elements,
  }
}
