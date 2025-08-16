import { Expression, SymbolPrimitive } from "../globals/generics.js";
import { Pattern } from "../globals/patterns.js";

export interface Rule {
  identifier: SymbolPrimitive;
  patterns: Pattern[];
  expressions: Expression[];
}

export interface Fact {
  identifier: SymbolPrimitive;
  patterns: Pattern[];
}

export interface Exist {
  identifier: SymbolPrimitive;
  patterns: Pattern[];
}

export interface Not {
  patterns: Pattern[];
}
export interface Findall {
  template: Expression;
  goal: Expression;
  bag: Expression;
}
export interface Forall {
  condition: Expression;
  action: Expression;
}
