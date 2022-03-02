/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComponentOutput = /* GraphQL */ `
  subscription OnCreateComponentOutput {
    onCreateComponentOutput {
      id
      x
      y
      width
      height
      tag
      content
      extraStyle
      characterVariable
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateComponentOutput = /* GraphQL */ `
  subscription OnUpdateComponentOutput {
    onUpdateComponentOutput {
      id
      x
      y
      width
      height
      tag
      content
      extraStyle
      characterVariable
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteComponentOutput = /* GraphQL */ `
  subscription OnDeleteComponentOutput {
    onDeleteComponentOutput {
      id
      x
      y
      width
      height
      tag
      content
      extraStyle
      characterVariable
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateComponentInput = /* GraphQL */ `
  subscription OnCreateComponentInput {
    onCreateComponentInput {
      id
      x
      y
      width
      height
      tag
      content
      extraStyle
      characterVariable
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateComponentInput = /* GraphQL */ `
  subscription OnUpdateComponentInput {
    onUpdateComponentInput {
      id
      x
      y
      width
      height
      tag
      content
      extraStyle
      characterVariable
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteComponentInput = /* GraphQL */ `
  subscription OnDeleteComponentInput {
    onDeleteComponentInput {
      id
      x
      y
      width
      height
      tag
      content
      extraStyle
      characterVariable
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateComponent = /* GraphQL */ `
  subscription OnCreateComponent {
    onCreateComponent {
      id
      name
      width
      Inputs {
        nextToken
        startedAt
      }
      Outputs {
        nextToken
        startedAt
      }
      height
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateComponent = /* GraphQL */ `
  subscription OnUpdateComponent {
    onUpdateComponent {
      id
      name
      width
      Inputs {
        nextToken
        startedAt
      }
      Outputs {
        nextToken
        startedAt
      }
      height
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteComponent = /* GraphQL */ `
  subscription OnDeleteComponent {
    onDeleteComponent {
      id
      name
      width
      Inputs {
        nextToken
        startedAt
      }
      Outputs {
        nextToken
        startedAt
      }
      height
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateSpellAccess = /* GraphQL */ `
  subscription OnCreateSpellAccess {
    onCreateSpellAccess {
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
export const onUpdateSpellAccess = /* GraphQL */ `
  subscription OnUpdateSpellAccess {
    onUpdateSpellAccess {
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
export const onDeleteSpellAccess = /* GraphQL */ `
  subscription OnDeleteSpellAccess {
    onDeleteSpellAccess {
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
export const onCreateFeatures = /* GraphQL */ `
  subscription OnCreateFeatures {
    onCreateFeatures {
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
export const onUpdateFeatures = /* GraphQL */ `
  subscription OnUpdateFeatures {
    onUpdateFeatures {
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
export const onDeleteFeatures = /* GraphQL */ `
  subscription OnDeleteFeatures {
    onDeleteFeatures {
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
export const onCreateFeaturesByClass = /* GraphQL */ `
  subscription OnCreateFeaturesByClass {
    onCreateFeaturesByClass {
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
export const onUpdateFeaturesByClass = /* GraphQL */ `
  subscription OnUpdateFeaturesByClass {
    onUpdateFeaturesByClass {
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
export const onDeleteFeaturesByClass = /* GraphQL */ `
  subscription OnDeleteFeaturesByClass {
    onDeleteFeaturesByClass {
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
export const onCreateSpells = /* GraphQL */ `
  subscription OnCreateSpells {
    onCreateSpells {
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
export const onUpdateSpells = /* GraphQL */ `
  subscription OnUpdateSpells {
    onUpdateSpells {
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
export const onDeleteSpells = /* GraphQL */ `
  subscription OnDeleteSpells {
    onDeleteSpells {
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
export const onCreateClasses = /* GraphQL */ `
  subscription OnCreateClasses {
    onCreateClasses {
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
export const onUpdateClasses = /* GraphQL */ `
  subscription OnUpdateClasses {
    onUpdateClasses {
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
export const onDeleteClasses = /* GraphQL */ `
  subscription OnDeleteClasses {
    onDeleteClasses {
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
