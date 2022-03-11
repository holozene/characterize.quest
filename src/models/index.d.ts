import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type Character5eMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClassLevelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SkillScoreMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FeatureMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EquipmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ComponentPositionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type Class5eMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SkillMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SubclassMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SpellMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FluencyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LanguageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ComponentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ComponentItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ComponentInputMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ComponentOutputMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type Class5eSkillMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Character5e {
  readonly id: string;
  readonly charName?: string;
  readonly playerName?: string;
  readonly str?: number;
  readonly dex?: number;
  readonly con?: number;
  readonly int?: number;
  readonly wis?: number;
  readonly cha?: number;
  readonly walkSpeed?: number;
  readonly maxHP?: number;
  readonly curHP?: number;
  readonly tempHP?: number;
  readonly deathPasses?: number;
  readonly deathFails?: number;
  readonly inspiration?: boolean;
  readonly exhaustion?: number;
  readonly notes?: string;
  readonly race?: string;
  readonly ClassLevels?: (ClassLevel | null)[];
  readonly SkillScores?: (SkillScore | null)[];
  readonly Feats?: (Feature | null)[];
  readonly Equipment?: (Equipment | null)[];
  readonly ComponentPositions?: (ComponentPosition | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Character5e, Character5eMetaData>);
  static copyOf(source: Character5e, mutator: (draft: MutableModel<Character5e, Character5eMetaData>) => MutableModel<Character5e, Character5eMetaData> | void): Character5e;
}

export declare class ClassLevel {
  readonly id: string;
  readonly level?: number;
  readonly characterID: string;
  readonly classID: string;
  readonly subclassID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ClassLevel, ClassLevelMetaData>);
  static copyOf(source: ClassLevel, mutator: (draft: MutableModel<ClassLevel, ClassLevelMetaData>) => MutableModel<ClassLevel, ClassLevelMetaData> | void): ClassLevel;
}

export declare class SkillScore {
  readonly id: string;
  readonly halfProf?: boolean;
  readonly Prof?: boolean;
  readonly doubleProf?: boolean;
  readonly characterID: string;
  readonly skillID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SkillScore, SkillScoreMetaData>);
  static copyOf(source: SkillScore, mutator: (draft: MutableModel<SkillScore, SkillScoreMetaData>) => MutableModel<SkillScore, SkillScoreMetaData> | void): SkillScore;
}

export declare class Feature {
  readonly id: string;
  readonly level?: number;
  readonly name?: string;
  readonly description?: string;
  readonly feat?: boolean;
  readonly characterID: string;
  readonly classID: string;
  readonly subclassID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Feature, FeatureMetaData>);
  static copyOf(source: Feature, mutator: (draft: MutableModel<Feature, FeatureMetaData>) => MutableModel<Feature, FeatureMetaData> | void): Feature;
}

export declare class Equipment {
  readonly id: string;
  readonly quantity?: number;
  readonly condition?: string;
  readonly equipped?: boolean;
  readonly proficency?: boolean;
  readonly characterID: string;
  readonly itemID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Equipment, EquipmentMetaData>);
  static copyOf(source: Equipment, mutator: (draft: MutableModel<Equipment, EquipmentMetaData>) => MutableModel<Equipment, EquipmentMetaData> | void): Equipment;
}

export declare class ComponentPosition {
  readonly id: string;
  readonly x?: number;
  readonly y?: number;
  readonly characterID: string;
  readonly componentID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ComponentPosition, ComponentPositionMetaData>);
  static copyOf(source: ComponentPosition, mutator: (draft: MutableModel<ComponentPosition, ComponentPositionMetaData>) => MutableModel<ComponentPosition, ComponentPositionMetaData> | void): ComponentPosition;
}

export declare class Class5e {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly hitDice?: number;
  readonly save1?: string;
  readonly save2?: string;
  readonly numSkills?: number;
  readonly Skills?: (Class5eSkill | null)[];
  readonly Features?: (Feature | null)[];
  readonly Subclasses?: (Subclass | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Class5e, Class5eMetaData>);
  static copyOf(source: Class5e, mutator: (draft: MutableModel<Class5e, Class5eMetaData>) => MutableModel<Class5e, Class5eMetaData> | void): Class5e;
}

export declare class Skill {
  readonly id: string;
  readonly name?: string;
  readonly attribute?: string;
  readonly class5es?: (Class5eSkill | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Skill, SkillMetaData>);
  static copyOf(source: Skill, mutator: (draft: MutableModel<Skill, SkillMetaData>) => MutableModel<Skill, SkillMetaData> | void): Skill;
}

export declare class Subclass {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly classID: string;
  readonly Features?: (Feature | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Subclass, SubclassMetaData>);
  static copyOf(source: Subclass, mutator: (draft: MutableModel<Subclass, SubclassMetaData>) => MutableModel<Subclass, SubclassMetaData> | void): Subclass;
}

export declare class Spell {
  readonly id: string;
  readonly name?: string;
  readonly spell_lvl?: string;
  readonly cast_time?: string;
  readonly range?: string;
  readonly verbal?: boolean;
  readonly somatic?: boolean;
  readonly material?: string;
  readonly duration?: string;
  readonly concentration?: boolean;
  readonly school?: string;
  readonly description?: string;
  readonly classID: string;
  readonly subclassID: string;
  readonly featureID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Spell, SpellMetaData>);
  static copyOf(source: Spell, mutator: (draft: MutableModel<Spell, SpellMetaData>) => MutableModel<Spell, SpellMetaData> | void): Spell;
}

export declare class Item {
  readonly id: string;
  readonly name?: string;
  readonly type?: string;
  readonly weightlbs?: number;
  readonly valuegp?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}

export declare class Fluency {
  readonly id: string;
  readonly read?: boolean;
  readonly write?: boolean;
  readonly characterID: string;
  readonly languageID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Fluency, FluencyMetaData>);
  static copyOf(source: Fluency, mutator: (draft: MutableModel<Fluency, FluencyMetaData>) => MutableModel<Fluency, FluencyMetaData> | void): Fluency;
}

export declare class Language {
  readonly id: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Language, LanguageMetaData>);
  static copyOf(source: Language, mutator: (draft: MutableModel<Language, LanguageMetaData>) => MutableModel<Language, LanguageMetaData> | void): Language;
}

export declare class Component {
  readonly id: string;
  readonly name?: string;
  readonly width?: number;
  readonly height?: number;
  readonly Items?: (ComponentItem | null)[];
  readonly Inputs?: (ComponentInput | null)[];
  readonly Outputs?: (ComponentOutput | null)[];
  readonly showInMenu?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Component, ComponentMetaData>);
  static copyOf(source: Component, mutator: (draft: MutableModel<Component, ComponentMetaData>) => MutableModel<Component, ComponentMetaData> | void): Component;
}

export declare class ComponentItem {
  readonly id: string;
  readonly x?: number;
  readonly y?: number;
  readonly width?: number;
  readonly height?: number;
  readonly content?: string;
  readonly style?: string;
  readonly componentID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ComponentItem, ComponentItemMetaData>);
  static copyOf(source: ComponentItem, mutator: (draft: MutableModel<ComponentItem, ComponentItemMetaData>) => MutableModel<ComponentItem, ComponentItemMetaData> | void): ComponentItem;
}

export declare class ComponentInput {
  readonly id: string;
  readonly x?: number;
  readonly y?: number;
  readonly width?: number;
  readonly height?: number;
  readonly type?: string;
  readonly variable?: string;
  readonly style?: string;
  readonly componentID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ComponentInput, ComponentInputMetaData>);
  static copyOf(source: ComponentInput, mutator: (draft: MutableModel<ComponentInput, ComponentInputMetaData>) => MutableModel<ComponentInput, ComponentInputMetaData> | void): ComponentInput;
}

export declare class ComponentOutput {
  readonly id: string;
  readonly x?: number;
  readonly y?: number;
  readonly width?: number;
  readonly height?: number;
  readonly variable?: string;
  readonly style?: string;
  readonly componentID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ComponentOutput, ComponentOutputMetaData>);
  static copyOf(source: ComponentOutput, mutator: (draft: MutableModel<ComponentOutput, ComponentOutputMetaData>) => MutableModel<ComponentOutput, ComponentOutputMetaData> | void): ComponentOutput;
}

export declare class Class5eSkill {
  readonly id: string;
  readonly class5e: Class5e;
  readonly skill: Skill;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Class5eSkill, Class5eSkillMetaData>);
  static copyOf(source: Class5eSkill, mutator: (draft: MutableModel<Class5eSkill, Class5eSkillMetaData>) => MutableModel<Class5eSkill, Class5eSkillMetaData> | void): Class5eSkill;
}