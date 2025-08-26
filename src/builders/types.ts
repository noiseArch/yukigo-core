import {
  Constraint,
  ListType,
  ParameterizedType,
  TupleType,
  Type,
  TypeAlias,
  TypeSignature,
} from "../globals/types.js";
import { symbolPrimitive } from "./primitives.js";

export const typeCon = (name: string): Type => ({
  type: "SimpleType",
  value: name,
  constraints: [],
});

export function listType(type: Type): ListType {
  return {
    type: "ListType",
    values: type,
    constraints: [],
  };
}
export function tupleType(type: Type[]): TupleType {
  return {
    type: "TupleType",
    values: type,
    constraints: [],
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
