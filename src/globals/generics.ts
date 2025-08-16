import {
  Application,
  CompositionExpression,
  InfixApplicationExpression,
  Lambda,
} from "../paradigms/functional.js";
import { BaseOperator } from "./operators.js";
import { Pattern } from "./patterns.js";
import { Type, TypeAlias, TypeSignature } from "./types.js";

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
  operator: BaseOperator;
  right: Expression;
  left: Expression;
}

export type ArithmeticOperatorType =
  | "Plus"
  | "Minus"
  | "Multiply"
  | "Divide"
  | "Modulo"
  | "Power";
export interface ArithmeticOperation extends BaseOperation {
  type: "Arithmetic";
  operator: BaseOperator & { type: ArithmeticOperatorType };
}

export type ComparisonOperatorType =
  | "Equal"
  | "NotEqual"
  | "Similar"
  | "NotSimilar"
  | "GreaterOrEqualThan"
  | "GreaterThan"
  | "LessOrEqualThan"
  | "LessThan";

export interface ComparisonOperation extends BaseOperation {
  type: "Comparison";
  operator: BaseOperator & { type: ComparisonOperatorType };
}

export type LogicalOperatorType = "And" | "Or" | "Negation";
export interface LogicalOperation extends BaseOperation {
  type: "Logical";
  operator: BaseOperator & { type: LogicalOperatorType };
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
  type: "Bitwise";
  operator: BaseOperator & { type: BitwiseOperatorType };
}
export type StringOperatorType = "Concat";

export interface StringOperation extends BaseOperation {
  type: "String";
  operator: BaseOperator & { type: StringOperatorType };
}

export type Operation =
  | ArithmeticOperation
  | StringOperation
  | ComparisonOperation
  | LogicalOperation
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
  | InfixApplicationExpression;

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

export type AST = (TypeAlias | TypeSignature | Function)[];

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
  operator: BaseOperator;
  equations: Equation[];
}
export interface Variable {
  identifier: SymbolPrimitive;
  expression: Expression;
}

export interface Assignment {
  identifier: SymbolPrimitive;
  expression: Expression;
}

type Visitor = {
  [nodeType: string]: (node: any, parent?: any) => void;
};

export function traverse(node: any, visitor: Visitor, parent?: any) {
  if (!node || typeof node !== "object") return;
  
  // multi-key visitors (comma-separated types)
  if (node.type) {
    for (const key in visitor) {
      if (key === "*") continue;
      const types = key.split(",").map(t => t.trim());
      if (types.includes(node.type)) {
        visitor[key](node, parent);
      }
    }
  }

  if (visitor["*"]) {
    visitor["*"](node, parent);
  }
  
  for (const key in node) {
    if (key === "type") continue;
    const child = node[key];
    if (Array.isArray(child)) {
      child.forEach(c => traverse(c, visitor, node));
    } else if (typeof child === "object" && child !== null) {
      traverse(child, visitor, node);
    }
  }
}
