"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = {
    "title": "Example Schema",
    "description": "My cool schema",
    "type": "object",
    "properties": {
        "users": {
            "type": "array",
            "title": "user id array",
            "description": "Array of authorized user ids.",
            "items": {
                "type": "string"
            }
        }
    }
};
// TODO: 2nd block comment should annotate UserIdArray, not users
exports.output = "/**\n* This file was automatically generated by json-schema-to-typescript.\n* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,\n* and run json-schema-to-typescript to regenerate this file.\n*/\n\n/**\n * Array of authorized user ids.\n */\nexport type UserIdArray = string[];\n\n/**\n * My cool schema\n */\nexport interface ExampleSchema {\n  users?: UserIdArray;\n  [k: string]: any;\n}\n";
//# sourceMappingURL=namedProperty.js.map