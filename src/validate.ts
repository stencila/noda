import { Node } from '@stencila/schema'
import { Jesta } from '.'
import { CapabilityError } from './util'

/* eslint-disable @typescript-eslint/no-unused-vars */
export function validate(
  this: Jesta,
  node: Node,
  force?: boolean
): Promise<Node> {
  throw new CapabilityError('validate')
}
