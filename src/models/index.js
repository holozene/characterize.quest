// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Ability = {
  "STRENGTH": "STRENGTH",
  "DEXTERITY": "DEXTERITY",
  "CONSTITUTION": "CONSTITUTION",
  "INTELLIGENCE": "INTELLIGENCE",
  "WISDOM": "WISDOM",
  "CHARISMA": "CHARISMA",
  "ANY": "ANY"
};

const { ComponentItem, ComponentInput, ComponentOutput, Component, SpellAccess, Features, FeaturesByClass, Spells, Classes } = initSchema(schema);

export {
  ComponentItem,
  ComponentInput,
  ComponentOutput,
  Component,
  SpellAccess,
  Features,
  FeaturesByClass,
  Spells,
  Classes,
  Ability
};