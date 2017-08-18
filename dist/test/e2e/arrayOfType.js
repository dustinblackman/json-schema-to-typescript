"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
    "title": "Array of type",
    "type": "object",
    "properties": {
        "foo": {
            "items": {
                "type": "string"
            },
            "type": "array"
        },
        "bar": {
            "items": {
                "type": "string"
            },
            "type": ["array"]
        },
        "baz": {
            "items": {
                "type": ["string", "number"]
            },
            "type": ["array"]
        },
        "moo": {
            "items": [
                { "type": "integer" },
                { "type": "string" }
            ]
        }
    }
};
exports.output = "/**\n* This file was automatically generated by json-schema-to-typescript.\n* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,\n* and run json-schema-to-typescript to regenerate this file.\n*/\n\nexport interface ArrayOfType {\n  foo?: string[];\n  bar?: string[];\n  baz?: (string | number)[];\n  moo?: [number, string];\n  [k: string]: any;\n}\n";
//# sourceMappingURL=arrayOfType.js.map