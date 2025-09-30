import {
  Application,
  CompositionExpression,
  InfixApplicationExpression,
  Lambda,
} from "../paradigms/functional.js";
import {
  EntryPoint,
  Enumeration,
  ForLoop,
  Procedure,
  While,
} from "../paradigms/imperative.js";
import { Clause, Exist, Findall, Forall, Not } from "../paradigms/logic.js";
import { Class, Interface, Object } from "../paradigms/object.js";
import { Operator, Operation } from "./operators.js";
import { Pattern } from "./patterns.js";
import { Type, TypeAlias, TypeCast, TypeSignature } from "./types.js";

export type Modify<T, R> = Omit<T, keyof R> & R;

// Universal primitive value types

export type YukigoPrimitive =
  | "YuNumber"
  | "YuString"
  | "YuChar"
  | "YuBoolean"
  | "YuTuple"
  | "YuList"
  | "YuNil"
  | "YuDict"
  | "YuObject"
  | "YuSymbol";

export type PrimitiveValue =
  | number
  | boolean
  | string
  | symbol
  | null
  | undefined;

// Primitives

/**
 * Base interface for all primitive values
 */
export interface BasePrimitive {
  type: YukigoPrimitive;
  value: PrimitiveValue | PrimitiveValue[];
}

export interface NumberPrimitive extends BasePrimitive {
  type: "YuNumber";
  numericType: string;
  value: number;
}

export interface BooleanPrimitive extends BasePrimitive {
  type: "YuBoolean";
  value: string;
}

export interface CharPrimitive extends BasePrimitive {
  type: "YuChar";
  value: string;
}
export interface StringPrimitive extends BasePrimitive {
  type: "YuString";
  value: string;
}

export interface NilPrimitive extends BasePrimitive {
  type: "YuNil";
  value: undefined | null;
}

export interface SymbolPrimitive extends BasePrimitive {
  type: "YuSymbol";
  value: string;
  description?: string;
}

export interface ListPrimitive {
  type: "YuList";
  elements: Expression[];
}

export type Primitive =
  | NumberPrimitive
  | BooleanPrimitive
  | CharPrimitive
  | StringPrimitive
  | NilPrimitive
  | SymbolPrimitive
  | ListPrimitive;

/**
 * Source location information
 */
export interface SourceLocation {
  start: Position;
  end: Position;
}

export interface Position {
  line: number;
  column: number;
  offset: number;
}

// Expressions

export interface TupleExpression {
  type: "TupleExpression";
  elements: Expression[];
}

export interface FieldExpression {
  type: "FieldExpression";
  name: SymbolPrimitive;
  expression: Expression;
}

export interface DataExpression {
  type: "DataExpression";
  name: SymbolPrimitive;
  contents: FieldExpression[];
}
export interface ConsExpression {
  type: "ConsExpression";
  head: Expression;
  tail: Expression;
}

export interface LetInExpression {
  type: "LetInExpression";
  declarations: Expression;
  expression: Expression;
}

export interface If {
  type: "If";
  condition: Expression;
  then: Expression;
  else: Expression;
}

export interface Return {
  type: "Return";
  body: Expression;
}

export type BodyExpression =
  | Primitive
  | Operation
  | TupleExpression
  | If
  | Print
  | Otherwise
  | Variable
  | ConsExpression
  | DataExpression
  | CompositionExpression
  | Lambda
  | Application
  | InfixApplicationExpression
  | Exist
  | Forall
  | Findall
  | Not
  | Return
  | TypeCast;

export type Expression = {
  type: "Expression";
  body: BodyExpression;
};

export interface Field {
  type: "Field";
  name: SymbolPrimitive | undefined;
  value: Type;
}

export interface Constructor {
  type: "Constructor";
  name: string;
  fields: Field[];
}

export interface Record {
  type: "Record";
  name: SymbolPrimitive;
  contents: Constructor[];
}

export interface UnguardedBody {
  type: "UnguardedBody";
  sequence: Sequence;
}

export interface GuardedBody {
  type: "GuardedBody";
  condition: Expression;
  body: Expression;
}

export interface Equation {
  type: "Equation";
  patterns: Pattern[];
  body: UnguardedBody | GuardedBody[];
  return?: Return;
}

export interface Function {
  type: "Function";
  identifier: SymbolPrimitive;
  equations: Equation[];
}

export type Statement =
  | Function
  | Clause
  | Procedure
  | TypeAlias
  | TypeSignature
  | Class
  | Object
  | Return
  | Interface
  | Enumeration
  | Assignment
  | Record
  | If
  | ForLoop
  | While;

export type AST = Statement[];

export interface YukigoParser {
  errors?: string[];
  parse: (code: string) => AST;
}

export interface Otherwise {
  type: "Otherwise";
}

export function otherwise(): Otherwise {
  return {
    type: "Otherwise",
  };
}
export interface Match {
  type: "Match";
  condition: Expression;
  body: Equation[];
}
export interface Switch {
  type: "Switch";
  value: Expression;
  cases: {
    condition: Expression;
    body: Expression;
  }[];
  default: Expression;
}
export interface Try {
  type: "Try";
  body: Expression;
  catch: {
    patterns: Pattern;
    body: Expression;
  }[];
  finally: Expression;
}
export interface Raise {
  type: "Raise";
  body: Expression;
}
export interface Print {
  type: "Print";
  expression: Expression;
}

// export interface Statement {
//   pattern: Pattern;
//   expression: Expression;
// }

export interface For {
  type: "For";
  statements: Statement[];
  body: Expression;
}
export interface Break {
  type: "Break";
  body: Expression;
}
export interface Continue {
  type: "Continue";
  body: Expression;
}
export interface Sequence {
  type: "Sequence";
  statements: Statement[];
}
export interface Arrow {
  type: "Arrow";
  expression1: Expression[];
  expression2: Expression[];
}

export interface PrimitiveMethod {
  type: "PrimitiveMethod";
  operator: Operator;
  equations: Equation[];
}
export interface Variable {
  type: "Variable";
  identifier: SymbolPrimitive;
  expression: Expression;
}

export const variable = (
  identifier: SymbolPrimitive,
  expression: Expression
): Variable => {
  return {
    type: "Variable",
    identifier,
    expression,
  };
};

export interface Assignment {
  type: "Assignment";
  identifier: SymbolPrimitive;
  expression: Expression;
}
