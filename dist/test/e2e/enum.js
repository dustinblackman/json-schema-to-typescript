"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
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
            "type": "boolean",
            "enum": [true]
        },
        "impliedBooleanEnum": {
            "enum": [true]
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
};
exports.outputs = [false, true].map(function (enableConstEnums) {
    return {
        options: {
            enableConstEnums: enableConstEnums
        },
        output: "/**\n* This file was automatically generated by json-schema-to-typescript.\n* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,\n* and run json-schema-to-typescript to regenerate this file.\n*/\n\nexport interface Enum {\n  stringEnum: (\"a\" | \"b\" | \"c\");\n  impliedStringEnum: (\"a\" | \"b\" | \"c\");\n  booleanEnum: true;\n  impliedBooleanEnum: true;\n  integerEnum: (-1 | 0 | 1);\n  impliedIntegerEnum: (-1 | 0 | 1);\n  numberEnum?: (-1.1 | 0 | 1.2);\n  namedIntegerEnum?: NamedIntegerEnum;\n  impliedNamedIntegerEnum: ImpliedNamedIntegerEnum;\n  impliedHeterogeneousEnum?: (-20.1 | null | \"foo\" | false);\n  namedIntegerEnumTitle: NamedInteger;\n  impliedNamedIntegerEnumTitle: ImpliedNamedInteger;\n}\n\nexport" + (enableConstEnums ? ' const ' : ' ') + "enum NamedIntegerEnum {\n  One = 1,\n  Two = 2,\n  Three = 3\n}\nexport" + (enableConstEnums ? ' const ' : ' ') + "enum ImpliedNamedIntegerEnum {\n  Four = 4,\n  Five = 5,\n  Six = 6\n}\nexport" + (enableConstEnums ? ' const ' : ' ') + "enum NamedInteger {\n  One = 1,\n  Two = 2,\n  Three = 3\n}\nexport" + (enableConstEnums ? ' const ' : ' ') + "enum ImpliedNamedInteger {\n  Four = 4,\n  Five = 5,\n  Six = 6\n}\n\n"
    };
});
//# sourceMappingURL=enum.js.map