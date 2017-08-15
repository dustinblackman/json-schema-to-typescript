import { JSONSchema4Type } from 'json-schema';
import { AST } from './types/AST';
import { JSONSchema } from './types/JSONSchema';
export declare type Processed = Map<JSONSchema | JSONSchema4Type, AST>;
export declare function parse(schema: JSONSchema | JSONSchema4Type, rootSchema?: JSONSchema, keyName?: string, isSchema?: boolean, processed?: Processed): AST;
