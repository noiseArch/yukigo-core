import { AST, For, PrimitiveMethod, Record as RecordNode } from "./generics.js";
import {
  ArithmeticOperation,
  AssignOperation,
  ComparisonOperation,
  UnifyOperation,
  Expression,
  BaseOperation,
} from "./generics.js";
import { Application, CompositionExpression, InfixApplicationExpression, Lambda, Yield } from "../paradigms/functional.js";
import { EntryPoint, Enumeration, ForLoop, Procedure, Repeat, While } from "../paradigms/imperative.js";
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
import { Exist, Fact, Findall, Forall, GoalExpression, Not, Program, Query, Rule } from "../paradigms/logic.js";
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
import { ParameterizedType, SimpleType, TupleType, Type, TypeAlias, TypeCast, TypeSignature } from "./types.js";

export type NodeType =
  | AST[number]
  | Procedure
  | Expression
  | Pattern
  | PrimitiveMethod
  | Type
  | Include
  | BaseOperation
  | Program
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
  | ArithmeticOperation
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

    if (stop) {
      return true;
    }

    // Recursively visit children based on their type
    for (const key in node) {
      if (Object.prototype.hasOwnProperty.call(node, key)) {
        const value = (node as any)[key];

        if (Array.isArray(value)) {
          for (const item of value) {
            if (runVisitor(item, node)) {
              return true;
            }
          }
        } else if (value && typeof value === "object" && "type" in value) {
          if (runVisitor(value as NodeType, node)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  // Handle the initial AST array or a single node
  if (Array.isArray(ast)) {
    for (const node of ast) {
      if (runVisitor(node)) {
        break;
      }
    }
  } else {
    runVisitor(ast);
  }
}