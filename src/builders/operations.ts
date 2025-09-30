import { Expression } from "../globals/generics.js";
import {
  LogicalBinaryOperation,
  LogicalBinaryOperator,
} from "../globals/operators.js";

export function logicalBinaryOperation(
  operator: LogicalBinaryOperator,
  left: Expression,
  right: Expression
): LogicalBinaryOperation {
  return {
    type: "LogicalBinaryOperation",
    operator,
    left,
    right,
  };
}
