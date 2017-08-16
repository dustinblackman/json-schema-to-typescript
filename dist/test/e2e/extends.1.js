"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
    "title": "Extends",
    'type': "object",
    "extends": {
        "$ref": "test/resources/BaseType.1.json"
    },
    properties: {
        "foo": {
            "type": "string"
        }
    },
    required: ["foo"],
    additionalProperties: false
};
exports.outputs = [
    {
        options: {
            declareExternallyReferenced: true
        },
        output: "/**\n* This file was automatically generated by json-schema-to-typescript.\n* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,\n* and run json-schema-to-typescript to regenerate this file.\n*/\n\nexport interface Extends extends Base1 {\n  foo: string;\n}\nexport interface Base1 {\n  firstName: string;\n  lastName: string;\n}\n"
    },
    {
        options: {
            declareExternallyReferenced: false
        },
        output: "/**\n* This file was automatically generated by json-schema-to-typescript.\n* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,\n* and run json-schema-to-typescript to regenerate this file.\n*/\n\nexport interface Extends extends Base1 {\n  foo: string;\n}\n"
    }
];
//# sourceMappingURL=extends.1.js.map