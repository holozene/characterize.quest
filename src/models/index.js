// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Character5e, ClassLevel, SkillScore, Feature, Equipment, ComponentPosition, Class5e, Skill, Subclass, Spell, Item, Fluency, Language, Component, ComponentItem, ComponentInput, ComponentOutput, Class5eSkill } = initSchema(schema);

export {
  Character5e,
  ClassLevel,
  SkillScore,
  Feature,
  Equipment,
  ComponentPosition,
  Class5e,
  Skill,
  Subclass,
  Spell,
  Item,
  Fluency,
  Language,
  Component,
  ComponentItem,
  ComponentInput,
  ComponentOutput,
  Class5eSkill
};