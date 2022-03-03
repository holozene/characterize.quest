/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComponentItem = /* GraphQL */ `
  mutation CreateComponentItem(
    $input: CreateComponentItemInput!
    $condition: ModelComponentItemConditionInput
  ) {
    createComponentItem(input: $input, condition: $condition) {
      id
      x
      y
      width
      height
      content
      style
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateComponentItem = /* GraphQL */ `
  mutation UpdateComponentItem(
    $input: UpdateComponentItemInput!
    $condition: ModelComponentItemConditionInput
  ) {
    updateComponentItem(input: $input, condition: $condition) {
      id
      x
      y
      width
      height
      content
      style
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteComponentItem = /* GraphQL */ `
  mutation DeleteComponentItem(
    $input: DeleteComponentItemInput!
    $condition: ModelComponentItemConditionInput
  ) {
    deleteComponentItem(input: $input, condition: $condition) {
      id
      x
      y
      width
      height
      content
      style
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createComponentInput = /* GraphQL */ `
  mutation CreateComponentInput(
    $input: CreateComponentInputInput!
    $condition: ModelComponentInputConditionInput
  ) {
    createComponentInput(input: $input, condition: $condition) {
      id
      x
      y
      width
      height
      type
      variable
      style
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateComponentInput = /* GraphQL */ `
  mutation UpdateComponentInput(
    $input: UpdateComponentInputInput!
    $condition: ModelComponentInputConditionInput
  ) {
    updateComponentInput(input: $input, condition: $condition) {
      id
      x
      y
      width
      height
      type
      variable
      style
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteComponentInput = /* GraphQL */ `
  mutation DeleteComponentInput(
    $input: DeleteComponentInputInput!
    $condition: ModelComponentInputConditionInput
  ) {
    deleteComponentInput(input: $input, condition: $condition) {
      id
      x
      y
      width
      height
      type
      variable
      style
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createComponentOutput = /* GraphQL */ `
  mutation CreateComponentOutput(
    $input: CreateComponentOutputInput!
    $condition: ModelComponentOutputConditionInput
  ) {
    createComponentOutput(input: $input, condition: $condition) {
      id
      x
      y
      width
      height
      variable
      style
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateComponentOutput = /* GraphQL */ `
  mutation UpdateComponentOutput(
    $input: UpdateComponentOutputInput!
    $condition: ModelComponentOutputConditionInput
  ) {
    updateComponentOutput(input: $input, condition: $condition) {
      id
      x
      y
      width
      height
      variable
      style
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteComponentOutput = /* GraphQL */ `
  mutation DeleteComponentOutput(
    $input: DeleteComponentOutputInput!
    $condition: ModelComponentOutputConditionInput
  ) {
    deleteComponentOutput(input: $input, condition: $condition) {
      id
      x
      y
      width
      height
      variable
      style
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createComponent = /* GraphQL */ `
  mutation CreateComponent(
    $input: CreateComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    createComponent(input: $input, condition: $condition) {
      id
      name
      width
      height
      Items {
        nextToken
        startedAt
      }
      Inputs {
        nextToken
        startedAt
      }
      Outputs {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateComponent = /* GraphQL */ `
  mutation UpdateComponent(
    $input: UpdateComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    updateComponent(input: $input, condition: $condition) {
      id
      name
      width
      height
      Items {
        nextToken
        startedAt
      }
      Inputs {
        nextToken
        startedAt
      }
      Outputs {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteComponent = /* GraphQL */ `
  mutation DeleteComponent(
    $input: DeleteComponentInput!
    $condition: ModelComponentConditionInput
  ) {
    deleteComponent(input: $input, condition: $condition) {
      id
      name
      width
      height
      Items {
        nextToken
        startedAt
      }
      Inputs {
        nextToken
        startedAt
      }
      Outputs {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSpellAccess = /* GraphQL */ `
  mutation CreateSpellAccess(
    $input: CreateSpellAccessInput!
    $condition: ModelSpellAccessConditionInput
  ) {
    createSpellAccess(input: $input, condition: $condition) {
      id
      spell_id
      class_id
      subclass_id
      race_id
      level
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSpellAccess = /* GraphQL */ `
  mutation UpdateSpellAccess(
    $input: UpdateSpellAccessInput!
    $condition: ModelSpellAccessConditionInput
  ) {
    updateSpellAccess(input: $input, condition: $condition) {
      id
      spell_id
      class_id
      subclass_id
      race_id
      level
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSpellAccess = /* GraphQL */ `
  mutation DeleteSpellAccess(
    $input: DeleteSpellAccessInput!
    $condition: ModelSpellAccessConditionInput
  ) {
    deleteSpellAccess(input: $input, condition: $condition) {
      id
      spell_id
      class_id
      subclass_id
      race_id
      level
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createFeatures = /* GraphQL */ `
  mutation CreateFeatures(
    $input: CreateFeaturesInput!
    $condition: ModelFeaturesConditionInput
  ) {
    createFeatures(input: $input, condition: $condition) {
      id
      name
      description
      FeaturesByClasses {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateFeatures = /* GraphQL */ `
  mutation UpdateFeatures(
    $input: UpdateFeaturesInput!
    $condition: ModelFeaturesConditionInput
  ) {
    updateFeatures(input: $input, condition: $condition) {
      id
      name
      description
      FeaturesByClasses {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteFeatures = /* GraphQL */ `
  mutation DeleteFeatures(
    $input: DeleteFeaturesInput!
    $condition: ModelFeaturesConditionInput
  ) {
    deleteFeatures(input: $input, condition: $condition) {
      id
      name
      description
      FeaturesByClasses {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createFeaturesByClass = /* GraphQL */ `
  mutation CreateFeaturesByClass(
    $input: CreateFeaturesByClassInput!
    $condition: ModelFeaturesByClassConditionInput
  ) {
    createFeaturesByClass(input: $input, condition: $condition) {
      id
      subclass_id
      feature_id
      featuresID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateFeaturesByClass = /* GraphQL */ `
  mutation UpdateFeaturesByClass(
    $input: UpdateFeaturesByClassInput!
    $condition: ModelFeaturesByClassConditionInput
  ) {
    updateFeaturesByClass(input: $input, condition: $condition) {
      id
      subclass_id
      feature_id
      featuresID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteFeaturesByClass = /* GraphQL */ `
  mutation DeleteFeaturesByClass(
    $input: DeleteFeaturesByClassInput!
    $condition: ModelFeaturesByClassConditionInput
  ) {
    deleteFeaturesByClass(input: $input, condition: $condition) {
      id
      subclass_id
      feature_id
      featuresID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSpells = /* GraphQL */ `
  mutation CreateSpells(
    $input: CreateSpellsInput!
    $condition: ModelSpellsConditionInput
  ) {
    createSpells(input: $input, condition: $condition) {
      id
      name
      spell_lvl
      cast_time
      range
      verbal
      somatic
      material
      duration
      concentration
      school
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSpells = /* GraphQL */ `
  mutation UpdateSpells(
    $input: UpdateSpellsInput!
    $condition: ModelSpellsConditionInput
  ) {
    updateSpells(input: $input, condition: $condition) {
      id
      name
      spell_lvl
      cast_time
      range
      verbal
      somatic
      material
      duration
      concentration
      school
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSpells = /* GraphQL */ `
  mutation DeleteSpells(
    $input: DeleteSpellsInput!
    $condition: ModelSpellsConditionInput
  ) {
    deleteSpells(input: $input, condition: $condition) {
      id
      name
      spell_lvl
      cast_time
      range
      verbal
      somatic
      material
      duration
      concentration
      school
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createClasses = /* GraphQL */ `
  mutation CreateClasses(
    $input: CreateClassesInput!
    $condition: ModelClassesConditionInput
  ) {
    createClasses(input: $input, condition: $condition) {
      id
      name
      save_1
      save_2
      skill_no
      spellcasting
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateClasses = /* GraphQL */ `
  mutation UpdateClasses(
    $input: UpdateClassesInput!
    $condition: ModelClassesConditionInput
  ) {
    updateClasses(input: $input, condition: $condition) {
      id
      name
      save_1
      save_2
      skill_no
      spellcasting
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteClasses = /* GraphQL */ `
  mutation DeleteClasses(
    $input: DeleteClassesInput!
    $condition: ModelClassesConditionInput
  ) {
    deleteClasses(input: $input, condition: $condition) {
      id
      name
      save_1
      save_2
      skill_no
      spellcasting
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
