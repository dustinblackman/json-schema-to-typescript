import $RefParser = require('json-schema-ref-parser')
import { whiteBright } from 'cli-color'
import { JSONSchema } from './types/JSONSchema'
import { log } from './utils'

export async function dereference(schema: JSONSchema, cwd: string): Promise<JSONSchema> {
  log(whiteBright.bgGreen('resolver'), schema, cwd)
  const parser = new $RefParser
  if (Array.isArray(schema.required) && !schema.required.length) {
    delete schema.required
  }
  return parser.dereference(cwd, schema, {})
}
