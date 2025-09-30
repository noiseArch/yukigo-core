import { Expression } from "./generics.js";

export type ArithmeticBinaryOperator =
  | "Plus"
  | "Minus"
  | "Multiply"
  | "Divide"
  | "Modulo"
  | "Power"
  | "Max"
  | "Min";
export type ArithmeticUnaryOperator =
  | "Round"
  | "Absolute"
  | "Ceil"
  | "Floor"
  | "Sqrt";

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

export type LogicalBinaryOperator = "And" | "Or";
export type LogicalUnaryOperator = "Negation";

export type BitwiseOperatorType =
  | "BitwiseOr"
  | "BitwiseAnd"
  | "BitwiseLeftShift"
  | "BitwiseRightShift"
  | "BitwiseNot"
  | "BitwiseUnsignedRightShift"
  | "BitwiseXor";

export type ListBinaryOperator =
  | "Push"
  | "Inject"
  | "Gather"
  | "Collect"
  | "AllSatisfy"
  | "AnySatisfy"
  | "Select"
  | "Detect"
  | "SetAt";

export type ListUnaryOperator =
  | "Size"
  | "DetectMax"
  | "DetectMin"
  | "Count"
  | "GetAt"
  | "Slice"
  | "Flatten";

export type UnifyOperator = "Unify";

export type AssignOperator = "Assign";

export type StringBinaryOperator = "Concat";

export type UnaryOperator =
  | ArithmeticUnaryOperator
  | LogicalUnaryOperator
  | ListUnaryOperator;

export type BinaryOperator =
  | ArithmeticBinaryOperator
  | ComparisonOperatorType
  | LogicalBinaryOperator
  | BitwiseOperatorType
  | AssignOperator
  | UnifyOperator
  | StringBinaryOperator
  | BitwiseOperatorType
  | ListBinaryOperator;

export type Operator = UnaryOperator | BinaryOperator;

export interface BinaryOperation {
  type: string;
  operator: BinaryOperator;
  right: Expression;
  left: Expression;
}
export interface UnaryOperation {
  type: string;
  operator: UnaryOperator;
  operand: Expression;
}

export interface ArithmeticUnaryOperation extends UnaryOperation {
  type: "ArithmeticUnaryOperation";
  operator: ArithmeticUnaryOperator;
}

export interface ArithmeticBinaryOperation extends BinaryOperation {
  type: "ArithmeticBinaryOperation";
  operator: ArithmeticBinaryOperator;
}
export interface ListUnaryOperation extends UnaryOperation {
  type: "ListUnaryOperation";
  operator: ListUnaryOperator;
}

export interface ListBinaryOperation extends BinaryOperation {
  type: "ListBinaryOperation";
  operator: ListBinaryOperator;
}

export interface ComparisonOperation extends BinaryOperation {
  type: "ComparisonOperation";
  operator: ComparisonOperatorType;
}

export interface LogicalBinaryOperation extends BinaryOperation {
  type: "LogicalBinaryOperation";
  operator: LogicalBinaryOperator;
}
export interface LogicalUnaryOperation extends UnaryOperation {
  type: "LogicalUnaryOperation";
  operator: LogicalUnaryOperator;
}

export interface BitwiseOperation extends BinaryOperation {
  type: "BitwiseOperation";
  operator: BitwiseOperatorType;
}

export interface StringOperation extends BinaryOperation {
  type: "StringOperation";
  operator: StringBinaryOperator;
}

export interface UnifyOperation extends BinaryOperation {
  type: "UnifyOperation";
  operator: UnifyOperator;
}

export interface AssignOperation extends BinaryOperation {
  type: "AssignOperation";
  operator: AssignOperator;
}

export type Operation =
  | ArithmeticBinaryOperation
  | ArithmeticUnaryOperation
  | StringOperation
  | ListBinaryOperation
  | ListUnaryOperation
  | ComparisonOperation
  | LogicalBinaryOperation
  | LogicalUnaryOperation
  | UnifyOperation
  | AssignOperation
  | BitwiseOperation;
