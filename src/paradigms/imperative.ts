import {
  ASTNode,
  Equation,
  Expression,
  SymbolPrimitive,
  Visitor,
} from "../globals/generics.js";

export class EntryPoint extends ASTNode {
  identifier: SymbolPrimitive;
  expressions: Expression[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitEntryPoint(this);
  }
  public toJSON() {
    return {
      type: "EntryPoint",
      identifier: this.identifier.toJSON(),
      expressions: this.expressions.map((expr) => expr.toJSON()),
    };
  }
}

export class Procedure extends ASTNode {
  identifier: SymbolPrimitive;
  equations: Equation[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitProcedure(this);
  }
  public toJSON() {
    return {
      type: "Procedure",
      identifier: this.identifier.toJSON(),
      equations: this.equations.map((eq) => eq.toJSON()),
    };
  }
}

export class Enumeration extends ASTNode {
  identifier: SymbolPrimitive;
  contents: SymbolPrimitive[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitEnumeration(this);
  }
  public toJSON() {
    return {
      type: "Enumeration",
      identifier: this.identifier.toJSON(),
      expressions: this.contents.map((c) => c.toJSON()),
    };
  }
}

export class While extends ASTNode {
  condition: Expression;
  body: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitWhile(this);
  }
  public toJSON() {
    return {
      type: "While",
      condition: this.condition.toJSON(),
      body: this.body.toJSON(),
    };
  }
}
export class Repeat extends ASTNode {
  count: Expression;
  body: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitRepeat(this);
  }
  public toJSON() {
    return {
      type: "Repeat",
      count: this.count.toJSON(),
      body: this.body.toJSON(),
    };
  }
}

export class ForLoop extends ASTNode {
  initialization: Expression;
  condition: Expression;
  update: Expression;
  body: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitForLoop(this);
  }
  public toJSON() {
    return {
      type: "ForLoop",
      initialization: this.initialization.toJSON(),
      condition: this.condition.toJSON(),
      update: this.update.toJSON(),
      body: this.body.toJSON(),
    };
  }
}
