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

const { ComponentOutput, ComponentInput, Component, SpellAccess, Features, FeaturesByClass, Spells, Classes } = initSchema(schema);

export {
  ComponentOutput,
  ComponentInput,
  Component,
  SpellAccess,
  Features,
  FeaturesByClass,
  Spells,
  Classes,
  Ability
};