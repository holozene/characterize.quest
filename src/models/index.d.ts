import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Ability {
  STRENGTH = "STRENGTH",
  DEXTERITY = "DEXTERITY",
  CONSTITUTION = "CONSTITUTION",
  INTELLIGENCE = "INTELLIGENCE",
  WISDOM = "WISDOM",
  CHARISMA = "CHARISMA",
  ANY = "ANY"
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

type ComponentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SpellAccessMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FeaturesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FeaturesByClassMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SpellsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClassesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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

export declare class Component {
  readonly id: string;
  readonly name?: string;
  readonly width?: number;
  readonly height?: number;
  readonly Items?: (ComponentItem | null)[];
  readonly Inputs?: (ComponentInput | null)[];
  readonly Outputs?: (ComponentOutput | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Component, ComponentMetaData>);
  static copyOf(source: Component, mutator: (draft: MutableModel<Component, ComponentMetaData>) => MutableModel<Component, ComponentMetaData> | void): Component;
}

export declare class SpellAccess {
  readonly id: string;
  readonly spell_id?: string;
  readonly class_id?: string;
  readonly subclass_id?: string;
  readonly race_id?: string;
  readonly level?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SpellAccess, SpellAccessMetaData>);
  static copyOf(source: SpellAccess, mutator: (draft: MutableModel<SpellAccess, SpellAccessMetaData>) => MutableModel<SpellAccess, SpellAccessMetaData> | void): SpellAccess;
}

export declare class Features {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly FeaturesByClasses?: (FeaturesByClass | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Features, FeaturesMetaData>);
  static copyOf(source: Features, mutator: (draft: MutableModel<Features, FeaturesMetaData>) => MutableModel<Features, FeaturesMetaData> | void): Features;
}

export declare class FeaturesByClass {
  readonly id: string;
  readonly subclass_id?: string;
  readonly feature_id?: string;
  readonly featuresID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FeaturesByClass, FeaturesByClassMetaData>);
  static copyOf(source: FeaturesByClass, mutator: (draft: MutableModel<FeaturesByClass, FeaturesByClassMetaData>) => MutableModel<FeaturesByClass, FeaturesByClassMetaData> | void): FeaturesByClass;
}

export declare class Spells {
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
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Spells, SpellsMetaData>);
  static copyOf(source: Spells, mutator: (draft: MutableModel<Spells, SpellsMetaData>) => MutableModel<Spells, SpellsMetaData> | void): Spells;
}

export declare class Classes {
  readonly id: string;
  readonly name?: string;
  readonly save_1?: Ability | keyof typeof Ability;
  readonly save_2?: Ability | keyof typeof Ability;
  readonly skill_no?: number;
  readonly spellcasting?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Classes, ClassesMetaData>);
  static copyOf(source: Classes, mutator: (draft: MutableModel<Classes, ClassesMetaData>) => MutableModel<Classes, ClassesMetaData> | void): Classes;
}