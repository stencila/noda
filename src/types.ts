import { JSONSchema7 } from 'json-schema'

export enum Method {
  build = 'build',
  call = 'call',
  clean = 'clean',
  compile = 'compile',
  convert = 'convert',
  decode = 'decode',
  delete = 'delete',
  downcast = 'downcast',
  encode = 'encode',
  enrich = 'enrich',
  execute = 'execute',
  export = 'export',
  funcs = 'funcs',
  get = 'get',
  import = 'import',
  pipe = 'pipe',
  read = 'read',
  select = 'select',
  set = 'set',
  upcast = 'upcast',
  validate = 'validate',
  vars = 'vars',
  write = 'write',
}

/**
 * A description of the package that implements the plugin
 */
export interface Package {
  name: string
  version: string
  description: string
  url?: string
}

export interface BaseAddress {
  transport: 'stdio' | 'http' | 'ws'
  framing?: 'nld' | 'vlp'
  serialization: 'json' | 'cbor' | 'bincode'
}

export interface StdioAddress extends BaseAddress {
  transport: 'stdio'
  command: string
  args: string[]
  framing: 'nld' | 'vlp'
}

export interface HttpAddress extends BaseAddress {
  transport: 'http'
  url: string
}

export interface WebsocketAddress extends BaseAddress {
  transport: 'ws'
  url: string
}

export type Address = StdioAddress | HttpAddress | WebsocketAddress

export type ParameterSchema = JSONSchema7

export type ParameterSchemas = Record<string, ParameterSchema>

export type MethodSchema = JSONSchema7 & { interruptible?: boolean }

/**
 * A plugin manifest
 */
export interface Manifest {
  name: string
  description: string
  softwareVersion: string
  runtimeAlternatives: unknown[]
  featureList: MethodSchema[]
}
