import {
    CharPrimitive,
  NumberPrimitive,
  StringPrimitive,
  SymbolPrimitive,
} from "../globals/generics.js";

export function numberPrimitive(value: number): NumberPrimitive {
  return {
    type: "YuNumber",
    value,
    numericType: "number",
  };
}

export function charPrimitive(value: string): CharPrimitive {
  return {
    type: "YuChar",
    value,
  };
}

export function stringPrimitive(value: string): StringPrimitive {
  return {
    type: "YuString",
    value,
  };
}

export function symbolPrimitive(value: string): SymbolPrimitive {
  return {
    type: "YuSymbol",
    value,
  };
}
