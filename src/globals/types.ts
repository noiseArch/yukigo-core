import { Expression, SymbolPrimitive } from "./generics.js";

export type Type = SimpleType | TypeVar | ListType | TupleType | ParameterizedType | ConstrainedType;

export interface SimpleType {
  type: "SimpleType";
  value: string;
  constraints: Constraint[];
}
export interface TypeVar {
  type: "TypeVar";
  value: string;
  constraints: Constraint[];
}
export interface ListType {
  type: "ListType";
  values: Type;
  constraints: Constraint[];
}
export interface TupleType {
  type: "TupleType";
  values: Type[];
  constraints: Constraint[];
}

export interface Constraint {
  type: "Constraint";
  name: string;
  parameters: Type[]
}

export interface ParameterizedType {
  type: "ParameterizedType";
  inputs: Type[];
  return: Type;
  constraints: Constraint[];
}
export type ConstrainedType = {
  type: "ConstrainedType";
  constraints: Constraint[];
};

export interface TypeAlias {
  type: "TypeAlias";
  identifier: SymbolPrimitive;
  variables: string[]
  value: Type;
}

export interface TypeSignature {
  type: "TypeSignature";
  identifier: SymbolPrimitive;
  body: Type;
}
export interface TypeCast {
  type: "TypeCast";
  expression: Expression;
  body: Type;
}

/* 
export type TypeVar = { type: "TypeVar"; name: string };
export type TypeConstructor = { type: "TypeConstructor"; name: string };

export type FunctionType = {
  type: "FunctionType";
  from: TypeNode[];
  to: TypeNode;
};
export type TypeApplication = {
  type: "TypeApplication";
  base: TypeNode;
  args: TypeNode[];
};
export type ListType = { type: "ListType"; element: TypeNode };
export type TupleType = { type: "TupleType"; elements: TypeNode[] };
export type DataType = {
  type: "DataType";
  name: string;
  constructors: { name: string; fields: TypeNode[] }[];
};
export type IfTheElseType = {
  type: "IfTheElseType";
  condition: TypeNode;
  then: TypeNode;
  else: TypeNode;
};

export type TypeNode =
  | TypeVar
  | TypeConstructor
  | ConstrainedType
  | FunctionType
  | TypeApplication
  | ListType
  | TupleType
  | DataType
  | IfTheElseType; */
