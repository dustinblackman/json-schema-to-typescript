export const input = {
  "title": "Enum",
  "type": "object",
  "properties": {
    "stringEnum": {
      "type": "string",
      "enum": ["a", "b", "c"]
    },
    "impliedStringEnum": {
      "enum": ["a", "b", "c"]
    },
    "booleanEnum": {
      "type" : "boolean",
      "enum": [ true ]
    },
    "impliedBooleanEnum": {
      "enum": [ true ]
    },
    "integerEnum": {
      "type": "integer",
      "enum": [-1, 0, 1]
    },
    "impliedIntegerEnum": {
      "enum": [-1, 0, 1]
    },
    "numberEnum": {
      "type": "number",
      "enum": [-1.1, 0, 1.2]
    },
    "namedIntegerEnum": {
      "type": "integer",
      "enum": [1, 2, 3],
      "tsEnumNames": ["One", "Two", "Three"]
    },
    "impliedNamedIntegerEnum": {
      "enum": [4, 5, 6],
      "tsEnumNames": ["Four", "Five", "Six"]
    },
    "impliedHeterogeneousEnum": {
      "enum": [-20.1, null, "foo", false]
    },
    "namedIntegerEnumTitle": {
      "type": "integer",
      "enum": [1, 2, 3],
      "title": "NamedInteger",
      "tsEnumNames": ["One", "Two", "Three"]
    },
    "impliedNamedIntegerEnumTitle": {
      "enum": [4, 5, 6],
      "title": "ImpliedNamedInteger",
      "tsEnumNames": ["Four", "Five", "Six"]
    }
  },
  "required": ["stringEnum", "impliedStringEnum", "booleanEnum", "impliedBooleanEnum", "integerEnum", "impliedIntegerEnum", "impliedNamedIntegerEnum", 
  "namedIntegerEnumTitle", "impliedNamedIntegerEnumTitle"],
  "additionalProperties": false
}

export const outputs = [false, true].map(enableConstEnums => {
  return {
    options: {
      enableConstEnums
    },
    output: `/**
* This file was automatically generated by json-schema-to-typescript.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run json-schema-to-typescript to regenerate this file.
*/

export interface Enum {
  stringEnum: ("a" | "b" | "c");
  impliedStringEnum: ("a" | "b" | "c");
  booleanEnum: true;
  impliedBooleanEnum: true;
  integerEnum: (-1 | 0 | 1);
  impliedIntegerEnum: (-1 | 0 | 1);
  numberEnum?: (-1.1 | 0 | 1.2);
  namedIntegerEnum?: NamedIntegerEnum;
  impliedNamedIntegerEnum: ImpliedNamedIntegerEnum;
  impliedHeterogeneousEnum?: (-20.1 | null | "foo" | false);
  namedIntegerEnumTitle: NamedInteger;
  impliedNamedIntegerEnumTitle: ImpliedNamedInteger;
}

export${enableConstEnums ? ' const ' : ' '}enum NamedIntegerEnum {
  One = 1,
  Two = 2,
  Three = 3
}
export${enableConstEnums ? ' const ' : ' '}enum ImpliedNamedIntegerEnum {
  Four = 4,
  Five = 5,
  Six = 6
}
export${enableConstEnums ? ' const ' : ' '}enum NamedInteger {
  One = 1,
  Two = 2,
  Three = 3
}
export${enableConstEnums ? ' const ' : ' '}enum ImpliedNamedInteger {
  Four = 4,
  Five = 5,
  Six = 6
}

`
  }
})
