import { ASTNode, Expression, Visitor } from "./generics.js";

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

export class BinaryOperation extends ASTNode {
  type: string;
  operator: BinaryOperator;
  right: Expression;
  left: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitBinaryOperation(this);
  }
  public toJSON() {
    return {
      type: this.type,
      operator: this.operator,
      right: this.right,
      left: this.left
    }
  }
}

export class UnaryOperation extends ASTNode {
  type: string;
  operator: UnaryOperator;
  operand: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitUnaryOperation(this);
  }
  public toJSON() {
    return {
      type: this.type,
      operator: this.operator,
      operand: this.operand,
    }
  }
}

export class ArithmeticUnaryOperation extends UnaryOperation {
  declare type: "ArithmeticUnaryOperation";
  declare operator: ArithmeticUnaryOperator;
}

export class ArithmeticBinaryOperation extends BinaryOperation {
  declare type: "ArithmeticBinaryOperation";
  declare operator: ArithmeticBinaryOperator;
}
export class ListUnaryOperation extends UnaryOperation {
  declare type: "ListUnaryOperation";
  declare operator: ListUnaryOperator;
}

export class ListBinaryOperation extends BinaryOperation {
  declare type: "ListBinaryOperation";
  declare operator: ListBinaryOperator;
}

export class ComparisonOperation extends BinaryOperation {
  declare type: "ComparisonOperation";
  declare operator: ComparisonOperatorType;
}

export class LogicalBinaryOperation extends BinaryOperation {
  declare type: "LogicalBinaryOperation";
  declare operator: LogicalBinaryOperator;
}
export class LogicalUnaryOperation extends UnaryOperation {
  declare type: "LogicalUnaryOperation";
  declare operator: LogicalUnaryOperator;
}

export class BitwiseOperation extends BinaryOperation {
  declare type: "BitwiseOperation";
  declare operator: BitwiseOperatorType;
}

export class StringOperation extends BinaryOperation {
  declare type: "StringOperation";
  declare operator: StringBinaryOperator;
}

export class UnifyOperation extends BinaryOperation {
  declare type: "UnifyOperation";
  declare operator: UnifyOperator;
}

export class AssignOperation extends BinaryOperation {
  declare type: "AssignOperation";
  declare operator: AssignOperator;
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
