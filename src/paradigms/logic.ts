import {
  ASTNode,
  Expression,
  Primitive,
  SymbolPrimitive,
  Visitor,
} from "../globals/generics.js";
import { Pattern } from "../globals/patterns.js";

export type Clause = Rule | Fact | Query | Primitive;

export class Rule extends ASTNode {
  identifier: SymbolPrimitive;
  patterns: Pattern[];
  expressions: Expression[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitRule(this);
  }
  public toJSON() {
    return {
      type: "Rule",
      identifier: this.identifier.toJSON(),
      patterns: this.patterns.map((p) => p.toJSON()),
      expressions: this.expressions.map((expr) => expr.toJSON()),
    };
  }
}

export class Fact extends ASTNode {
  identifier: SymbolPrimitive;
  patterns: Pattern[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitFact(this);
  }
  public toJSON() {
    return {
      type: "Fact",
      identifier: this.identifier.toJSON(),
      patterns: this.patterns.map((p) => p.toJSON()),
    };
  }
}

export class Query extends ASTNode {
  expressions: Expression[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitQuery(this);
  }
  public toJSON() {
    return {
      type: "Query",
      expressions: this.expressions.map((expr) => expr.toJSON()),
    };
  }
}

export class Exist extends ASTNode {
  identifier: SymbolPrimitive;
  patterns: Pattern[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitExist(this);
  }
  public toJSON() {
    return {
      type: "Exist",
      identifier: this.identifier.toJSON(),
      patterns: this.patterns.map((p) => p.toJSON()),
    };
  }
}

export class Not extends ASTNode {
  expressions: Expression[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitNot(this);
  }
  public toJSON() {
    return {
      type: "Not",
      expressions: this.expressions.map((expr) => expr.toJSON()),
    };
  }
}
export class Findall extends ASTNode {
  template: Expression;
  goal: Expression;
  bag: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitFindall(this);
  }
  public toJSON() {
    return {
      type: "Findall",
      template: this.template.toJSON(),
      goal: this.goal.toJSON(),
      bag: this.bag.toJSON(),
    };
  }
}
export class Forall extends ASTNode {
  condition: Expression;
  action: Expression;
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitForall(this);
  }
  public toJSON() {
    return {
      type: "Forall",
      condition: this.condition.toJSON(),
      action: this.action.toJSON(),
    };
  }
}

export class Goal extends ASTNode {
  identifier: SymbolPrimitive;
  arguments: Pattern[];
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitGoal(this);
  }
  public toJSON() {
    return {
      type: "Goal",
      identifier: this.identifier.toJSON(),
      arguments: this.arguments.map((arg) => arg.toJSON()),
    };
  }
}
