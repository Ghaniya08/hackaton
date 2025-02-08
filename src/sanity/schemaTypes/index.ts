import { type SchemaTypeDefinition } from 'sanity'
import chef from './chefs';
import orders from './orders';
import foods from './foods';
import { User } from './User';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chef , foods , User , orders]}