export const input = {
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
}

export const output = `/**
* This file was automatically generated by json-schema-to-typescript.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run json-schema-to-typescript to regenerate this file.
*/

export interface ExampleSchema {
  "\`foo\`": string;
  "'bar'": string;
  "\\\"baz\\\"": string;
  "$zoo 2"?: string;
  "qux..."?: number;
  [k: string]: any;
}
`
