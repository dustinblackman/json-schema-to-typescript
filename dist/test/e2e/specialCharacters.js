"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
    title: 'Example Schema',
    type: 'object',
    properties: {
        '`foo`': {
            type: 'string'
        },
        "'bar'": {
            type: 'string'
        },
        '"baz"': {
            type: 'string'
        },
        '$zoo 2': {
            type: 'string'
        },
        'qux...': {
            type: 'number'
        }
    },
    required: ['`foo`', '\'bar\'', '\"baz\"']
};
exports.output = "/**\n* This file was automatically generated by json-schema-to-typescript.\n* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,\n* and run json-schema-to-typescript to regenerate this file.\n*/\n\nexport interface ExampleSchema {\n  \"`foo`\": string;\n  \"'bar'\": string;\n  \"\\\"baz\\\"\": string;\n  \"$zoo 2\"?: string;\n  \"qux...\"?: number;\n  [k: string]: any;\n}\n";
//# sourceMappingURL=specialCharacters.js.map