import {
  Application,
  CompositionExpression,
  InfixApplicationExpression,
  Lambda,
} from "../paradigms/functional.js";
import {
  Exist,
  Findall,
  Forall,
  GoalExpression,
  Not,
  Program,
} from "../paradigms/logic.js";
import { Operator } from "./operators.js";
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

// Operators

/**
 * Base interface for all operations
 */
export interface BaseOperation {
  type: string;
  operator: Operator;
  right: Expression;
  left: Expression;
}
export interface UnaryOperation {
  type: string;
  operator: Operator;
  operand: Expression;
}


export type ArithmeticUnaryOperator = "Round"

export interface ArithmeticUnaryOperation extends UnaryOperation {
  type: "ArithmeticUnaryOperation";
  operator: ArithmeticUnaryOperator;
}


export type ArithmeticOperatorType =
  | "Plus"
  | "Minus"
  | "Multiply"
  | "Divide"
  | "Modulo"
  | "Power";
export interface ArithmeticOperation extends BaseOperation {
  type: "ArithmeticOperation";
  operator: ArithmeticOperatorType;
}

export type ComparisonOperatorType =
  | "Equal"
  | "NotEqual"
  | "Same"
  | "NotSame"
  | "Similar"
  | "NotSimilar"
  | "GreaterOrEqualThan"
  | "GreaterThan"
  | "LessOrEqualThan"
  | "LessThan";

export interface ComparisonOperation extends BaseOperation {
  type: "ComparisonOperation";
  operator: ComparisonOperatorType;
}

export type LogicalOperatorType = "And" | "Or" | "Negation";
export interface LogicalOperation extends BaseOperation {
  type: "LogicalOperation";
  operator: LogicalOperatorType;
}

export type BitwiseOperatorType =
  | "BitwiseOr"
  | "BitwiseAnd"
  | "BitwiseLeftShift"
  | "BitwiseRightShift"
  | "BitwiseNot"
  | "BitwiseUnsignedRightShift"
  | "BitwiseXor";

export interface BitwiseOperation extends BaseOperation {
  type: "BitwiseOperation";
  operator: BitwiseOperatorType;
}
export type StringOperatorType = "Concat";

export interface StringOperation extends BaseOperation {
  type: "StringOperation";
  operator: StringOperatorType;
}
export type UnifyOperatorType = "Unify";

export interface UnifyOperation extends BaseOperation {
  type: "UnifyOperation";
  operator: UnifyOperatorType;
}

export type AssignOperatorType = "Assign";

export interface AssignOperation extends BaseOperation {
  type: "AssignOperation";
  operator: AssignOperatorType;
}

export type Operation =
  | ArithmeticOperation
  | ArithmeticUnaryOperation
  | StringOperation
  | ComparisonOperation
  | LogicalOperation
  | UnifyOperation
  | AssignOperation
  | BitwiseOperation;

// Collections

/**
 * Base collection interface
 */
export interface BaseCollection {
  type: string;
  elements: Expression[];
}

export interface ArrayCollection extends BaseCollection {
  type: "array";
}

// Not implemented yet
export interface SetCollection extends BaseCollection {
  type: "set";
}
// Not implemented yet
export interface MapCollection {
  type: "map";
  entries: MapEntry[];
}
export interface MapEntry {
  key: Expression;
  value: Expression;
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

export interface If {
  type: "If";
  condition: Expression;
  then: Expression;
  else: Expression;
}

export type BodyExpression =
  | Primitive
  | Operation
  | TupleExpression
  | If
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
  expression: Expression;
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
}

export interface Function {
  type: "Function";
  identifier: SymbolPrimitive;
  equations: Equation[];
}

export type AST = (TypeAlias | TypeSignature | Function | Program)[];

export interface YukigoParser {
  errors?: string[];
  parse: (code: string) => AST;
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

export interface Statement {
  pattern: Pattern;
  expression: Expression;
}

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
  expressions: Expression[];
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

export interface Assignment {
  identifier: SymbolPrimitive;
  expression: Expression;
}
