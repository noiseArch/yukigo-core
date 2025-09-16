import {
  AST,
  For,
  PrimitiveMethod,
  Record as RecordNode,
  YukigoPrimitive,
  Expression,
  BodyExpression,
  Function,
  SymbolPrimitive,
  Equation,
  GuardedBody,
  UnguardedBody,
  Variable,
} from "./generics.js";
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
  Attribute,
  Class,
  Include,
  Interface,
  Method,
  New,
  Object,
  Send,
} from "../paradigms/object.js";
import {
  Exist,
  Fact,
  Findall,
  Forall,
  GoalExpression,
  Not,
  Query,
  Rule,
} from "../paradigms/logic.js";
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
  ParameterizedType,
  SimpleType,
  TupleType,
  Type,
  TypeAlias,
  TypeCast,
  TypeSignature,
} from "./types.js";
import {
  ArithmeticBinaryOperation,
  AssignOperation,
  BinaryOperation,
  ComparisonOperation,
  UnifyOperation,
} from "./operators.js";

export type NodeType =
  | AST[number]
  | Procedure
  | Expression
  | Pattern
  | Variable
  | PrimitiveMethod
  | Type
  | Include
  | BinaryOperation
  | EntryPoint
  | Enumeration
  | Rule
  | Fact
  | Query
  | Exist
  | Not
  | Findall
  | Forall
  | GoalExpression
  | Application
  | RecordNode
  | CompositionExpression
  | InfixApplicationExpression
  | Lambda
  | ForLoop
  | While
  | Repeat
  | For
  | Attribute
  | Method
  | Object
  | Class
  | Interface
  | Send
  | New
  | ApplicationPattern
  | AsPattern
  | ConsPattern
  | ConstructorPattern
  | FunctorPattern
  | InfixApplicationPattern
  | ListPattern
  | LiteralPattern
  | Yield
  | TuplePattern
  | UnionPattern
  | VariablePattern
  | WildcardPattern
  | SimpleType
  | TupleType
  | ParameterizedType
  | TypeAlias
  | TypeSignature
  | TypeCast
  | ArithmeticBinaryOperation
  | AssignOperation
  | ComparisonOperation
  | UnifyOperation;

type Visitor = {
  [key: string]: (node: NodeType, parent?: NodeType) => boolean | void;
};

export function traverse(ast: AST | NodeType, visitor: Visitor) {
  function runVisitor(node: NodeType, parent?: NodeType) {
    if (!node || typeof node !== "object" || !("type" in node)) {
      return false;
    }

    let stop = false;

    // Check for specific node type visitor
    if (visitor[node.type]) {
      stop = visitor[node.type](node, parent) === true;
    }

    // Check for wildcard visitor
    if (!stop && visitor["*"]) {
      stop = visitor["*"](node, parent) === true;
    }

    if (stop) return true;

    // Recursively visit children based on their type
    for (const key in node) {
      if (!node.hasOwnProperty(key)) continue;

      const value = node[key];

      if (!value) return false;

      const items = Array.isArray(value) ? value : [value];

      for (const item of items) {
        if (typeof item === "object" && item.type && runVisitor(item, node)) {
          return true;
        }
      }
    }
    return false;
  }

  // Handle the initial AST array or a single node
  if (Array.isArray(ast)) {
    for (const node of ast) {
      if (runVisitor(node)) break;
    }
  } else {
    runVisitor(ast);
  }
}

const PrimitiveValues: YukigoPrimitive[] = [
  "YuNumber",
  "YuString",
  "YuChar",
  "YuBoolean",
  "YuTuple",
  "YuList",
  "YuNil",
  "YuDict",
  "YuObject",
  "YuSymbol",
];

export function isYukigoPrimitive(
  keyInput: string
): keyInput is YukigoPrimitive {
  return PrimitiveValues.includes(keyInput as YukigoPrimitive);
}
