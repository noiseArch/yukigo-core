import {
  Application,
  CompositionExpression,
  InfixApplicationExpression,
  Lambda,
  Yield,
} from "../paradigms/functional.js";
import {
  EntryPoint,
  Enumeration,
  ForLoop,
  Procedure,
  Repeat,
  While,
} from "../paradigms/imperative.js";
import {
  Clause,
  Exist,
  Fact,
  Findall,
  Forall,
  Goal,
  Not,
  Query,
  Rule,
} from "../paradigms/logic.js";
import {
  Attribute,
  Class,
  Implement,
  Include,
  Interface,
  Method,
  New,
  Object,
  Self,
  Send,
} from "../paradigms/object.js";
import {
  Operator,
  Operation,
  ArithmeticUnaryOperation,
  ArithmeticBinaryOperation,
  ListUnaryOperation,
  ListBinaryOperation,
  ComparisonOperation,
  LogicalBinaryOperation,
  LogicalUnaryOperation,
  BitwiseOperation,
  StringOperation,
  UnifyOperation,
  AssignOperation,
} from "./operators.js";
import {
  ApplicationPattern,
  AsPattern,
  ConsPattern,
  ConstructorPattern,
  FunctorPattern,
  InfixApplicationPattern,
  ListPattern,
  LiteralPattern,
  Pattern,
  TuplePattern,
  UnionPattern,
  VariablePattern,
  WildcardPattern,
} from "./patterns.js";
import {
  ConstrainedType,
  Constraint,
  ListType,
  ParameterizedType,
  SimpleType,
  TupleType,
  Type,
  TypeAlias,
  TypeApplication,
  TypeCast,
  TypeSignature,
  TypeVar,
} from "./types.js";

export type Modify<T, R> = Omit<T, keyof R> & R;

// Universal primitive value types

export interface StrictVisitor<TReturn> {
  visitSequence(node: Sequence): TReturn;
  // Primitives
  visitNumberPrimitive(node: NumberPrimitive): TReturn;
  visitBooleanPrimitive(node: BooleanPrimitive): TReturn;
  visitStringPrimitive(node: StringPrimitive): TReturn;
  visitListPrimitive(node: ListPrimitive): TReturn;
  visitNilPrimitive(node: NilPrimitive): TReturn;
  visitSymbolPrimitive(node: SymbolPrimitive): TReturn;
  visitCharPrimitive(node: CharPrimitive): TReturn;
  // Operations
  visitArithmeticUnaryOperation(node: ArithmeticUnaryOperation): TReturn;
  visitArithmeticBinaryOperation(node: ArithmeticBinaryOperation): TReturn;
  visitListUnaryOperation(node: ListUnaryOperation): TReturn;
  visitListBinaryOperation(node: ListBinaryOperation): TReturn;
  visitComparisonOperation(node: ComparisonOperation): TReturn;
  visitLogicalBinaryOperation(node: LogicalBinaryOperation): TReturn;
  visitLogicalUnaryOperation(node: LogicalUnaryOperation): TReturn;
  visitBitwiseOperation(node: BitwiseOperation): TReturn;
  visitStringOperation(node: StringOperation): TReturn;
  visitUnifyOperation(node: UnifyOperation): TReturn;
  visitAssignOperation(node: AssignOperation): TReturn;
  // Expressions
  visitExpression(node: Expression): TReturn;
  visitTupleExpr(node: TupleExpression): TReturn;
  visitFieldExpr(node: FieldExpression): TReturn;
  visitDataExpr(node: DataExpression): TReturn;
  visitConsExpr(node: ConsExpression): TReturn;
  visitLetInExpr(node: LetInExpression): TReturn;
  visitOtherwise(node: Otherwise): TReturn;
  visitCompositionExpression(node: CompositionExpression): TReturn;
  visitLambda(node: Lambda): TReturn;
  visitInfixApplicationExpression(node: InfixApplicationExpression): TReturn;
  visitApplication(node: Application): TReturn;
  visitExist(node: Exist): TReturn;
  visitNot(node: Not): TReturn;
  visitFindall(node: Findall): TReturn;
  visitForall(node: Forall): TReturn;
  visitGoal(node: Goal): TReturn;
  visitSend(node: Send): TReturn;
  visitNew(node: New): TReturn;
  visitImplement(node: Implement): TReturn;
  visitInclude(node: Include): TReturn;
  visitSelf(node: Self): TReturn;
  // Statements
  visitYield(node: Yield): TReturn;
  visitIf(node: If): TReturn;
  visitReturn(node: Return): TReturn;
  visitFunction(node: Function): TReturn;
  visitField(node: Field): TReturn;
  visitConstructor(node: Constructor): TReturn;
  visitRecord(node: Record): TReturn;
  visitUnguardedBody(node: UnguardedBody): TReturn;
  visitGuardedBody(node: GuardedBody): TReturn;
  visitEquation(node: Equation): TReturn;
  visitSwitch(node: Switch): TReturn;
  visitTry(node: Try): TReturn;
  visitRaise(node: Raise): TReturn;
  visitPrint(node: Print): TReturn;
  visitFor(node: For): TReturn;
  visitBreak(node: Break): TReturn;
  visitContinue(node: Continue): TReturn;
  visitVariable(node: Variable): TReturn;
  visitAssignment(node: Assignment): TReturn;
  visitEntryPoint(node: EntryPoint): TReturn;
  visitProcedure(node: Procedure): TReturn;
  visitEnumeration(node: Enumeration): TReturn;
  visitWhile(node: While): TReturn;
  visitRepeat(node: Repeat): TReturn;
  visitForLoop(node: ForLoop): TReturn;
  visitRule(node: Rule): TReturn;
  visitFact(node: Fact): TReturn;
  visitQuery(node: Query): TReturn;
  visitMethod(node: Method): TReturn;
  visitAttribute(node: Attribute): TReturn;
  visitObject(node: Object): TReturn;
  visitClass(node: Class): TReturn;
  visitInterface(node: Interface): TReturn;
  visitInterface(node: Interface): TReturn;
  // Patterns
  visitVariablePattern(node: VariablePattern): TReturn;
  visitLiteralPattern(node: LiteralPattern): TReturn;
  visitInfixApplicationPattern(node: InfixApplicationPattern): TReturn;
  visitApplicationPattern(node: ApplicationPattern): TReturn;
  visitTuplePattern(node: TuplePattern): TReturn;
  visitListPattern(node: ListPattern): TReturn;
  visitFunctorPattern(node: FunctorPattern): TReturn;
  visitAsPattern(node: AsPattern): TReturn;
  visitWildcardPattern(node: WildcardPattern): TReturn;
  visitUnionPattern(node: UnionPattern): TReturn;
  visitConstructorPattern(node: ConstructorPattern): TReturn;
  visitConsPattern(node: ConsPattern): TReturn;
  // Type
  visitSimpleType(node: SimpleType): TReturn;
  visitTypeVar(node: TypeVar): TReturn;
  visitTypeApplication(node: TypeApplication): TReturn;
  visitListType(node: ListType): TReturn;
  visitTupleType(node: TupleType): TReturn;
  visitConstraint(node: Constraint): TReturn;
  visitParameterizedType(node: ParameterizedType): TReturn;
  visitConstrainedType(node: ConstrainedType): TReturn;
  visitTypeAlias(node: TypeAlias): TReturn;
  visitTypeSignature(node: TypeSignature): TReturn;
  visitTypeCast(node: TypeCast): TReturn;
  visit(node: ASTNode): TReturn;
}

export type Visitor<R> = Partial<StrictVisitor<R>>;

export abstract class ASTNode {
  abstract accept<R>(visitor: Visitor<R>): R;
  abstract toJSON(): object;
}

export class NumberPrimitive extends ASTNode {
  constructor(public value: number) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitNumberPrimitive?.(this);
  }
  public toJSON() {
    return {
      type: "YuNumber",
      value: this.value,
    };
  }
}
export class BooleanPrimitive extends ASTNode {
  constructor(public value: boolean) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitBooleanPrimitive?.(this);
  }
  public toJSON() {
    return {
      type: "YuBoolean",
      value: this.value,
    };
  }
}
export class ListPrimitive extends ASTNode {
  constructor(public elements: Expression[]) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitListPrimitive?.(this);
  }
  public toJSON() {
    return {
      type: "YuList",
      value: this.elements,
    };
  }
}

export class CharPrimitive extends ASTNode {
  constructor(public value: string) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitCharPrimitive?.(this);
  }
  public toJSON() {
    return {
      type: "YuChar",
      value: this.value,
    };
  }
}
export class StringPrimitive extends ASTNode {
  constructor(public value: string) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitStringPrimitive?.(this);
  }
  public toJSON() {
    return {
      type: "YuString",
      value: this.value,
    };
  }
}

export class NilPrimitive extends ASTNode {
  constructor(public value: undefined | null) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitNilPrimitive?.(this);
  }
  public toJSON() {
    return {
      type: "YuNil",
      value: this.value,
    };
  }
}

export class SymbolPrimitive extends ASTNode {
  constructor(public value: string) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitSymbolPrimitive?.(this);
  }
  public toJSON() {
    return {
      type: "YuSymbol",
      value: this.value,
    };
  }
}

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

// Expressions

export class TupleExpression extends ASTNode {
  constructor(public elements: Expression[]) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitTupleExpr?.(this);
  }
  public toJSON() {
    return {
      type: "TupleExpression",
      elements: this.elements.map((expr) => expr.toJSON()),
    };
  }
}

export class FieldExpression extends ASTNode {
  constructor(public name: SymbolPrimitive, public expression: Expression) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitFieldExpr?.(this);
  }
  public toJSON() {
    return {
      type: "FieldExpression",
      name: this.name.toJSON(),
      expression: this.expression.toJSON(),
    };
  }
}

export class DataExpression extends ASTNode {
  constructor(
    public name: SymbolPrimitive,
    public contents: FieldExpression[]
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitDataExpr?.(this);
  }
  public toJSON() {
    return {
      type: "DataExpression",
      name: this.name.toJSON(),
      contents: this.contents.map((expr) => expr.toJSON()),
    };
  }
}
export class ConsExpression extends ASTNode {
  constructor(public head: Expression, public tail: Expression) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitConsExpr?.(this);
  }
  public toJSON() {
    return {
      type: "ConsExpression",
      head: this.head.toJSON(),
      tail: this.tail.toJSON(),
    };
  }
}

export class LetInExpression extends ASTNode {
  constructor(public declarations: Expression, public expression: Expression) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitLetInExpr?.(this);
  }
  public toJSON() {
    return {
      type: "LetInExpression",
      declarations: this.declarations.toJSON(),
      expression: this.expression.toJSON(),
    };
  }
}

export class Otherwise extends ASTNode {
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitOtherwise?.(this);
  }
  public toJSON() {
    return {
      type: "Otherwise",
    };
  }
}

export type Expression =
  | Primitive
  | Operation
  | TupleExpression
  | Print
  | Otherwise
  | ConsExpression
  | Self
  | New
  | Include
  | Implement
  | Send
  | DataExpression
  | CompositionExpression
  | Lambda
  | Application
  | InfixApplicationExpression
  | Exist
  | Forall
  | Findall
  | Not
  | TypeCast;

//export type Expression = {
//  type: "Expression";
//  body: BodyExpression;
//};

// Statements

export class If extends ASTNode {
  constructor(
    public condition: Expression,
    public then: Expression,
    public elseExpr: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitIf?.(this);
  }
  public toJSON() {
    return {
      type: "If",
      condition: this.condition.toJSON(),
      then: this.then.toJSON(),
      else: this.elseExpr.toJSON(),
    };
  }
}

export class Return extends ASTNode {
  constructor(public body: Expression) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitReturn?.(this);
  }
  public toJSON() {
    return {
      type: "Return",
      body: this.body.toJSON(),
    };
  }
}

export class Field extends ASTNode {
  constructor(public name: SymbolPrimitive | undefined, public value: Type) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitField?.(this);
  }
  public toJSON() {
    return {
      type: "Field",
      name: this.name.toJSON(),
      value: this.value.toJSON(),
    };
  }
}

export class Constructor extends ASTNode {
  constructor(public name: SymbolPrimitive, public fields: Field[]) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitConstructor?.(this);
  }
  public toJSON() {
    return {
      type: "Constructor",
      name: this.name.toJSON(),
      fields: this.fields.map((f) => f.toJSON()),
    };
  }
}

export class Record extends ASTNode {
  constructor(public name: SymbolPrimitive, public contents: Constructor[]) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitRecord?.(this);
  }
  public toJSON() {
    return {
      type: "Record",
      name: this.name.toJSON(),
      contents: this.contents.map((constructor) => constructor.toJSON()),
    };
  }
}

export class UnguardedBody extends ASTNode {
  constructor(public sequence: Sequence) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitUnguardedBody?.(this);
  }
  public toJSON() {
    return {
      type: "UnguardedBody",
      sequence: this.sequence.toJSON(),
    };
  }
}

export class GuardedBody extends ASTNode {
  constructor(public condition: Expression, public body: Expression) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitGuardedBody?.(this);
  }
  public toJSON() {
    return {
      type: "GuardedBody",
      condition: this.condition.toJSON(),
      body: this.body.toJSON(),
    };
  }
}

export class Equation extends ASTNode {
  constructor(
    public patterns: Pattern[],
    public body: UnguardedBody | GuardedBody[],
    public returnExpr?: Return
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitEquation?.(this);
  }
  public toJSON() {
    return {
      type: "Equation",
      patterns: this.patterns.map((pattern) => pattern.toJSON),
      body: Array.isArray(this.body)
        ? this.body.map((guard) => guard.toJSON())
        : this.body.toJSON(),
      return: this.returnExpr.toJSON(),
    };
  }
}

export class Function extends ASTNode {
  constructor(
    public identifier: SymbolPrimitive,
    public equations: Equation[]
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitFunction?.(this);
  }
  public toJSON() {
    return {
      type: "Function",
      identifier: this.identifier.toJSON(),
      equations: this.equations.map((eq) => eq.toJSON()),
    };
  }
}

export type Case = {
  condition: Expression;
  body: Expression;
};

export class Switch extends ASTNode {
  constructor(
    public value: Expression,
    public cases: Case[],
    public defaultExpr: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitSwitch?.(this);
  }
  public toJSON() {
    return {
      type: "Switch",
      value: this.value.toJSON(),
      cases: this.cases.map((caseVal) => ({
        condition: caseVal.condition.toJSON(),
        body: caseVal.body.toJSON(),
      })),
      default: this.defaultExpr.toJSON(),
    };
  }
}

export type Catch = {
  patterns: Pattern[];
  body: Expression;
};

export class Try extends ASTNode {
  constructor(
    public body: Expression,
    public catchExpr: Catch[],
    public finallyExpr: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitTry?.(this);
  }
  public toJSON() {
    return {
      type: "Try",
      body: this.body.toJSON(),
      catch: this.catchExpr.map(({ patterns, body }) => ({
        condition: patterns.map((pattern) => pattern.toJSON()),
        body: body.toJSON(),
      })),
      finally: this.finallyExpr.toJSON(),
    };
  }
}

export class Raise extends ASTNode {
  constructor(public body: Expression) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitRaise?.(this);
  }
  public toJSON() {
    return {
      type: "Raise",
      body: this.body.toJSON(),
    };
  }
}

export class Print extends ASTNode {
  constructor(public expression: Expression) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitPrint?.(this);
  }
  public toJSON() {
    return {
      type: "Print",
      expression: this.expression.toJSON(),
    };
  }
}

export class For extends ASTNode {
  constructor(public body: Expression, public statements: Statement[]) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitFor?.(this);
  }
  public toJSON() {
    return {
      type: "For",
      body: this.body.toJSON(),
      statements: this.statements.map((stmt) => stmt.toJSON()),
    };
  }
}
export class Break extends ASTNode {
  constructor(public body: Expression) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitBreak?.(this);
  }
  public toJSON() {
    return {
      type: "Break",
      body: this.body.toJSON(),
    };
  }
}
export class Continue extends ASTNode {
  constructor(public body: Expression) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitContinue?.(this);
  }
  public toJSON() {
    return {
      type: "Continue",
      body: this.body.toJSON(),
    };
  }
}

export class Variable extends ASTNode {
  constructor(
    public identifier: SymbolPrimitive,
    public expression: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitVariable?.(this);
  }
  public toJSON() {
    return {
      type: "Variable",
      identifier: this.identifier.toJSON(),
      expression: this.expression.toJSON(),
    };
  }
}

export class Assignment extends ASTNode {
  constructor(
    public identifier: SymbolPrimitive,
    public expression: Expression
  ) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitAssignment?.(this);
  }
  public toJSON() {
    return {
      type: "Assignment",
      identifier: this.identifier.toJSON(),
      expression: this.expression.toJSON(),
    };
  }
}

export class Sequence extends ASTNode {
  constructor(public statements: Statement[]) {
    super();
  }
  public accept<R>(visitor: Visitor<R>): R {
    return visitor.visitSequence?.(this);
  }
  public toJSON() {
    return {
      type: "Sequence",
      statements: this.statements.map((stmt) => stmt.toJSON()),
    };
  }
}

export type Statement =
  | EntryPoint
  | Function
  | Clause
  | Procedure
  | TypeAlias
  | TypeSignature
  | Class
  | Object
  | Method
  | Attribute
  | Interface
  | Switch
  | Try
  | Return
  | Print
  | Raise
  | Enumeration
  | Variable
  | Assignment
  | Yield
  | Record
  | If
  | Repeat
  | ForLoop
  | While;

export type AST = Statement[];

export interface YukigoParser {
  errors?: string[];
  parse: (code: string) => AST;
}

/* export interface Match {
  type: "Match";
  condition: Expression;
  body: Equation[];
}

export interface Arrow {
  type: "Arrow";
  expression1: Expression[];
  expression2: Expression[];
}

export interface PrimitiveMethod {
  type: "PrimitiveMethod";
  operator: Operator;
  equations: Equation[];
} */
