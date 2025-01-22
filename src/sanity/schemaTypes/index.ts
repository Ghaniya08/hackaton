import { type SchemaTypeDefinition } from 'sanity'
import chef from './chefs'
import foods from './foods'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chef , foods ],
}
