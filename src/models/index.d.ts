import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type Character5eMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ComponentPositionMetaData = {
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
  readonly ComponentPositions?: (ComponentPosition | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Character5e, Character5eMetaData>);
  static copyOf(source: Character5e, mutator: (draft: MutableModel<Character5e, Character5eMetaData>) => MutableModel<Character5e, Character5eMetaData> | void): Character5e;
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