import {
  ASTNode,
  Expression,
  SymbolPrimitive,
  Visitor,
} from "../globals/generics.js";
import { Pattern } from "../globals/patterns.js";

export class CompositionExpression extends ASTNode {
  left: Expression;
  right: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitCompositionExpression(this);
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
  parameters: Pattern[];
  body: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitLambda(this);
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
  expression: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitYield(this);
  }
  public toJSON() {
    return {
      type: "Yield",
      expression: this.expression.toJSON(),
    };
  }
}

export class InfixApplicationExpression extends ASTNode {
  operator: SymbolPrimitive;
  left: Expression;
  right: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitInfixApplicationExpression(this);
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
  function: Expression;
  parameter: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitApplication(this);
  }
  public toJSON() {
    return {
      type: "Application",
      function: this.function.toJSON(),
      parameter: this.parameter.toJSON(),
    };
  }
}
