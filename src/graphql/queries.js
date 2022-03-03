/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComponentItem = /* GraphQL */ `
  query GetComponentItem($id: ID!) {
    getComponentItem(id: $id) {
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
export const listComponentItems = /* GraphQL */ `
  query ListComponentItems(
    $filter: ModelComponentItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComponentItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncComponentItems = /* GraphQL */ `
  query SyncComponentItems(
    $filter: ModelComponentItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComponentItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getComponentInput = /* GraphQL */ `
  query GetComponentInput($id: ID!) {
    getComponentInput(id: $id) {
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
export const listComponentInputs = /* GraphQL */ `
  query ListComponentInputs(
    $filter: ModelComponentInputFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComponentInputs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncComponentInputs = /* GraphQL */ `
  query SyncComponentInputs(
    $filter: ModelComponentInputFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComponentInputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getComponentOutput = /* GraphQL */ `
  query GetComponentOutput($id: ID!) {
    getComponentOutput(id: $id) {
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
export const listComponentOutputs = /* GraphQL */ `
  query ListComponentOutputs(
    $filter: ModelComponentOutputFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComponentOutputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncComponentOutputs = /* GraphQL */ `
  query SyncComponentOutputs(
    $filter: ModelComponentOutputFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComponentOutputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getComponent = /* GraphQL */ `
  query GetComponent($id: ID!) {
    getComponent(id: $id) {
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
export const listComponents = /* GraphQL */ `
  query ListComponents(
    $filter: ModelComponentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComponents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        width
        height
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComponents = /* GraphQL */ `
  query SyncComponents(
    $filter: ModelComponentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComponents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        width
        height
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSpellAccess = /* GraphQL */ `
  query GetSpellAccess($id: ID!) {
    getSpellAccess(id: $id) {
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
export const listSpellAccesses = /* GraphQL */ `
  query ListSpellAccesses(
    $filter: ModelSpellAccessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpellAccesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSpellAccesses = /* GraphQL */ `
  query SyncSpellAccesses(
    $filter: ModelSpellAccessFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSpellAccesses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getFeatures = /* GraphQL */ `
  query GetFeatures($id: ID!) {
    getFeatures(id: $id) {
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
export const listFeatures = /* GraphQL */ `
  query ListFeatures(
    $filter: ModelFeaturesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeatures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFeatures = /* GraphQL */ `
  query SyncFeatures(
    $filter: ModelFeaturesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFeatures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFeaturesByClass = /* GraphQL */ `
  query GetFeaturesByClass($id: ID!) {
    getFeaturesByClass(id: $id) {
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
export const listFeaturesByClasses = /* GraphQL */ `
  query ListFeaturesByClasses(
    $filter: ModelFeaturesByClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeaturesByClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncFeaturesByClasses = /* GraphQL */ `
  query SyncFeaturesByClasses(
    $filter: ModelFeaturesByClassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFeaturesByClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSpells = /* GraphQL */ `
  query GetSpells($id: ID!) {
    getSpells(id: $id) {
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
export const listSpells = /* GraphQL */ `
  query ListSpells(
    $filter: ModelSpellsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpells(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSpells = /* GraphQL */ `
  query SyncSpells(
    $filter: ModelSpellsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSpells(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getClasses = /* GraphQL */ `
  query GetClasses($id: ID!) {
    getClasses(id: $id) {
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
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncClasses = /* GraphQL */ `
  query SyncClasses(
    $filter: ModelClassesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
