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

export class ArithmeticUnaryOperation extends ASTNode {
  constructor(
    public operator: ArithmeticUnaryOperator,
    public operand: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitArithmeticUnaryOperation?.(this);
  }
  public toJSON() {
    return {
      type: "ArithmeticUnaryOperation",
      operator: this.operator,
      operand: this.operand,
    };
  }
}

export class ArithmeticBinaryOperation extends ASTNode {
  constructor(
    public operator: ArithmeticBinaryOperator,
    public left: Expression,
    public right: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitArithmeticBinaryOperation?.(this);
  }
  public toJSON() {
    return {
      type: "ArithmeticBinaryOperation",
      operator: this.operator,
      left: this.left,
      right: this.right,
    };
  }
}
export class ListUnaryOperation extends ASTNode {
  constructor(public operator: ListUnaryOperator, public operand: Expression) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitListUnaryOperation?.(this);
  }
  public toJSON() {
    return {
      type: "ListUnaryOperation",
      operator: this.operator,
      operand: this.operand,
    };
  }
}

export class ListBinaryOperation extends ASTNode {
  constructor(
    public operator: ListBinaryOperator,
    public left: Expression,
    public right: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitListBinaryOperation?.(this);
  }
  public toJSON() {
    return {
      type: "ListBinaryOperation",
      operator: this.operator,
      left: this.left,
      right: this.right,
    };
  }
}

export class ComparisonOperation extends ASTNode {
  constructor(
    public operator: ComparisonOperatorType,
    public left: Expression,
    public right: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitComparisonOperation?.(this);
  }
  public toJSON() {
    return {
      type: "ComparisonOperation",
      operator: this.operator,
      left: this.left,
      right: this.right,
    };
  }
}

export class LogicalBinaryOperation extends ASTNode {
  constructor(
    public operator: LogicalBinaryOperator,
    public left: Expression,
    public right: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitLogicalBinaryOperation?.(this);
  }
  public toJSON() {
    return {
      type: "LogicalBinaryOperation",
      operator: this.operator,
      left: this.left,
      right: this.right,
    };
  }
}
export class LogicalUnaryOperation extends ASTNode {
  constructor(
    public operator: LogicalUnaryOperator,
    public operand: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitLogicalUnaryOperation?.(this);
  }
  public toJSON() {
    return {
      type: "LogicalUnaryOperation",
      operator: this.operator,
      operand: this.operand,
    };
  }
}

export class BitwiseOperation extends ASTNode {
  constructor(
    public operator: BitwiseOperatorType,
    public left: Expression,
    public right: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitBitwiseOperation?.(this);
  }
  public toJSON() {
    return {
      type: "BitwiseOperation",
      operator: this.operator,
      left: this.left,
      right: this.right,
    };
  }
}

export class StringOperation extends ASTNode {
  constructor(
    public operator: StringBinaryOperator,
    public left: Expression,
    public right: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitStringOperation?.(this);
  }
  public toJSON() {
    return {
      type: "StringOperation",
      operator: this.operator,
      left: this.left,
      right: this.right,
    };
  }
}

export class UnifyOperation extends ASTNode {
  constructor(
    public operator: UnifyOperator,
    public left: Expression,
    public right: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitUnifyOperation?.(this);
  }
  public toJSON() {
    return {
      type: "UnifyOperation",
      operator: this.operator,
      left: this.left,
      right: this.right,
    };
  }
}

export class AssignOperation extends ASTNode {
  constructor(
    public operator: AssignOperator,
    public left: Expression,
    public right: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitAssignOperation?.(this);
  }
  public toJSON() {
    return {
      type: "AssignOperation",
      operator: this.operator,
      left: this.left,
      right: this.right,
    };
  }
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
