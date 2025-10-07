import {
  ASTNode,
  Expression,
  SymbolPrimitive,
  Visitor,
} from "../globals/generics.js";
import { Pattern } from "../globals/patterns.js";

export class CompositionExpression extends ASTNode {
  constructor(public left: Expression, public right: Expression) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitCompositionExpression?.(this);
  }
  public toJSON() {
    return {
      type: "CompositionExpression",
      left: this.left.toJSON(),
      right: this.right.toJSON(),
    };
  }
}

export class Lambda extends ASTNode {
  constructor(public parameters: Pattern[], public body: Expression) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitLambda?.(this);
  }
  public toJSON() {
    return {
      type: "Lambda",
      body: this.body.toJSON(),
      parameters: this.parameters.map((p) => p.toJSON()),
    };
  }
}
export class Yield extends ASTNode {
  constructor(public expression: Expression) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitYield?.(this);
  }
  public toJSON() {
    return {
      type: "Yield",
      expression: this.expression.toJSON(),
    };
  }
}

export class InfixApplicationExpression extends ASTNode {
  constructor(
    public operator: SymbolPrimitive,
    public left: Expression,
    public right: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitInfixApplicationExpression?.(this);
  }
  public toJSON() {
    return {
      type: "InfixApplication",
      operator: this.operator.toJSON(),
      left: this.left.toJSON(),
      right: this.right.toJSON(),
    };
  }
}

export class Application extends ASTNode {
  constructor(public functionExpr: Expression, public parameter: Expression) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitApplication?.(this);
  }
  public toJSON() {
    return {
      type: "Application",
      function: this.functionExpr.toJSON(),
      parameter: this.parameter.toJSON(),
    };
  }
}
