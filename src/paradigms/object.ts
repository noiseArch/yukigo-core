import {
  ASTNode,
  Equation,
  Expression,
  SymbolPrimitive,
  Visitor,
} from "../globals/generics.js";

export class Method extends ASTNode {
  identifier: SymbolPrimitive;
  equations: Equation[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitMethod(this);
  }
  public toJSON() {
    return {
      type: "Method",
      identifier: this.identifier.toJSON(),
      equations: this.equations.map((eq) => eq.toJSON()),
    };
  }
}

export class Attribute extends ASTNode {
  identifier: SymbolPrimitive;
  expression: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitAttribute(this);
  }
  public toJSON() {
    return {
      type: "Attribute",
      identifier: this.identifier.toJSON(),
      expression: this.expression.toJSON(),
    };
  }
}

export class Object extends ASTNode {
  identifier: SymbolPrimitive;
  expression: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitObject(this);
  }
  public toJSON() {
    return {
      type: "Object",
      identifier: this.identifier.toJSON(),
      expression: this.expression.toJSON(),
    };
  }
}

export class Class extends ASTNode {
  identifier: SymbolPrimitive;
  extends: SymbolPrimitive | undefined;
  implements: Implement | undefined;
  expression: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitClass(this);
  }
  public toJSON() {
    return {
      type: "Class",
      identifier: this.identifier.toJSON(),
      extends: this.extends.toJSON(),
      implements: this.implements.toJSON(),
      expression: this.expression.toJSON(),
    };
  }
}

export class Interface extends ASTNode {
  identifier: SymbolPrimitive;
  extends: SymbolPrimitive[];
  expression: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitInterface(this);
  }
  public toJSON() {
    return {
      type: "Interface",
      identifier: this.identifier.toJSON(),
      extends: this.extends.map((symbol) => symbol.toJSON()),
      expression: this.expression.toJSON(),
    };
  }
}

export class Send extends ASTNode {
  receiver: Expression;
  selector: Expression;
  arguments: Expression[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitSend(this);
  }
  public toJSON() {
    return {
      type: "Send",
      receiver: this.receiver.toJSON(),
      selector: this.selector.toJSON(),
      arguments: this.arguments.map((arg) => arg.toJSON()),
    };
  }
}

export class New extends ASTNode {
  identifier: SymbolPrimitive;
  arguments: Expression[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitNew(this);
  }
  public toJSON() {
    return {
      type: "Send",
      identifier: this.identifier.toJSON(),
      arguments: this.arguments.map((arg) => arg.toJSON()),
    };
  }
}

export class Implement extends ASTNode {
  identifier: SymbolPrimitive;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitImplement(this);
  }
  public toJSON() {
    return {
      type: "Implement",
      identifier: this.identifier.toJSON(),
    };
  }
}

export class Include extends ASTNode {
  identifier: SymbolPrimitive;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitInclude(this);
  }
  public toJSON() {
    return {
      type: "Include",
      identifier: this.identifier.toJSON(),
    };
  }
}
export class Self extends ASTNode {
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitSelf(this);
  }
  public toJSON() {
    return {
      type: "Self",
    };
  }
}
