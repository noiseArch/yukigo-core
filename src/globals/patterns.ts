import {
  ASTNode,
  BooleanPrimitive,
  CharPrimitive,
  NumberPrimitive,
  StringPrimitive,
  SymbolPrimitive,
  Visitor,
} from "./generics.js";

export class VariablePattern extends ASTNode {
  name: SymbolPrimitive;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitVariablePattern(this);
  }
  public toJSON() {
    return {
      type: "VariablePattern",
      name: this.name.toJSON(),
    };
  }
}

export class LiteralPattern extends ASTNode {
  name:
    | SymbolPrimitive
    | NumberPrimitive
    | CharPrimitive
    | StringPrimitive
    | BooleanPrimitive;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitLiteralPattern(this);
  }
  public toJSON() {
    return {
      type: "LiteralPattern",
      name: this.name.toJSON(),
    };
  }
}
export class InfixApplicationPattern extends ASTNode {
  left: Pattern;
  cons: string;
  right: Pattern;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitInfixApplicationPattern(this);
  }
  public toJSON() {
    return {
      type: "InfixApplicationPattern",
      cons: this.cons,
      left: this.left.toJSON(),
      right: this.right.toJSON(),
    };
  }
}
export class ApplicationPattern extends ASTNode {
  symbol: SymbolPrimitive;
  args: Pattern[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitApplicationPattern(this);
  }
  public toJSON() {
    return {
      type: "ApplicationPattern",
      symbol: this.symbol.toJSON(),
      args: this.args.map((arg) => arg.toJSON()),
    };
  }
}

export class TuplePattern extends ASTNode {
  elements: Pattern[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitTuplePattern(this);
  }
  public toJSON() {
    return {
      type: "TuplePattern",
      elements: this.elements.map((elem) => elem.toJSON()),
    };
  }
}

export class ListPattern extends ASTNode {
  elements: Pattern[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitListPattern(this);
  }
  public toJSON() {
    return {
      type: "ListPattern",
      elements: this.elements.map((elem) => elem.toJSON()),
    };
  }
}

export class FunctorPattern extends ASTNode {
  identifier: SymbolPrimitive;
  args: Pattern[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitFunctorPattern(this);
  }
  public toJSON() {
    return {
      type: "FunctorPattern",
      identifier: this.identifier.toJSON(),
      args: this.args.map((arg) => arg.toJSON()),
    };
  }
}

export class AsPattern extends ASTNode {
  alias: VariablePattern | WildcardPattern;
  pattern: Pattern;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitAsPattern(this);
  }
  public toJSON() {
    return {
      type: "AsPattern",
      alias: this.alias.toJSON(),
      pattern: this.pattern.toJSON(),
    };
  }
}

export class WildcardPattern extends ASTNode {
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitWildcardPattern(this);
  }
  public toJSON() {
    return {
      type: "WildcardPattern",
      name: "_",
    };
  }
}

export class UnionPattern extends ASTNode {
  patterns: Pattern[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitUnionPattern(this);
  }
  public toJSON() {
    return {
      type: "UnionPattern",
      patterns: this.patterns.map((pattern) => pattern.toJSON()),
    };
  }
}

export class ConstructorPattern extends ASTNode {
  constr: string;
  patterns: Pattern[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitConstructorPattern(this);
  }
  public toJSON() {
    return {
      type: "ConstructorPattern",
      constructor: this.constr,
      patterns: this.patterns.map((pattern) => pattern.toJSON()),
    };
  }
}

export class ConsPattern extends ASTNode {
  head: Pattern;
  tail: Pattern;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitConsPattern(this);
  }
  public toJSON() {
    return {
      type: "ConsPattern",
      head: this.head.toJSON(),
      tail: this.tail.toJSON(),
    };
  }
}

export type Pattern =
  | VariablePattern
  | LiteralPattern
  | InfixApplicationPattern
  | ApplicationPattern
  | TuplePattern
  | ListPattern
  | FunctorPattern
  | AsPattern
  | WildcardPattern
  | ConstructorPattern
  | ConsPattern;
