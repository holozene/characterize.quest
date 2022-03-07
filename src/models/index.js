// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Character5e, ComponentPosition, Component, ComponentItem, ComponentInput, ComponentOutput } = initSchema(schema);

export {
  Character5e,
  ComponentPosition,
  Component,
  ComponentItem,
  ComponentInput,
  ComponentOutput
};