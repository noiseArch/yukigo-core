import { Expression } from "../globals/generics.js";
import {
  Constraint,
  ListType,
  ParameterizedType,
  TupleType,
  Type,
  TypeAlias,
  TypeApplication,
  TypeCast,
  TypeSignature,
} from "../globals/types.js";
import { symbolPrimitive } from "./primitives.js";

export const typeCon = (name: string, constraints: Constraint[]): Type => ({
  type: "SimpleType",
  value: name,
  constraints,
});
export const typeApplication = (func: Type, arg: Type): TypeApplication => ({
  type: "TypeApplication",
  function: func,
  argument: arg,
});

export function listType(type: Type, constraints: Constraint[]): ListType {
  return {
    type: "ListType",
    values: type,
    constraints,
  };
}
export function tupleType(type: Type[], constraints: Constraint[]): TupleType {
  return {
    type: "TupleType",
    values: type,
    constraints,
  };
}

export function constraint(name: string, parameters: Type[]): Constraint {
  return {
    type: "Constraint",
    name,
    parameters,
  };
}

export function typeAlias(
  identifier: string,
  type: Type,
  variables: string[]
): TypeAlias {
  return {
    type: "TypeAlias",
    identifier: symbolPrimitive(identifier),
    value: type,
    variables,
  };
}

export const parameterizedType = (
  inputs: Type[],
  output: Type,
  constraints: Constraint[] = []
): ParameterizedType => ({
  type: "ParameterizedType",
  inputs: inputs,
  return: output,
  constraints,
});

export const typeSig = (
  name: string,
  inputs: Type[],
  output: Type,
  constraints: Constraint[] = []
): TypeSignature => ({
  type: "TypeSignature",
  identifier: symbolPrimitive(name),
  body: {
    type: "ParameterizedType",
    inputs: inputs,
    return: output,
    constraints,
  },
});

export const typeCast = (body: Type, expression: Expression): TypeCast => ({
  type: "TypeCast",
  expression,
  body,
});
