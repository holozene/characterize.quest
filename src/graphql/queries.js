/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCharacter5e = /* GraphQL */ `
  query GetCharacter5e($id: ID!) {
    getCharacter5e(id: $id) {
      id
      charName
      playerName
      str
      dex
      con
      int
      wis
      cha
      ComponentPositions {
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
export const listCharacter5es = /* GraphQL */ `
  query ListCharacter5es(
    $filter: ModelCharacter5eFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacter5es(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        charName
        playerName
        str
        dex
        con
        int
        wis
        cha
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
export const syncCharacter5es = /* GraphQL */ `
  query SyncCharacter5es(
    $filter: ModelCharacter5eFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCharacter5es(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        charName
        playerName
        str
        dex
        con
        int
        wis
        cha
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
export const getComponentPosition = /* GraphQL */ `
  query GetComponentPosition($id: ID!) {
    getComponentPosition(id: $id) {
      id
      x
      y
      characterID
      componentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listComponentPositions = /* GraphQL */ `
  query ListComponentPositions(
    $filter: ModelComponentPositionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComponentPositions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        x
        y
        characterID
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
export const syncComponentPositions = /* GraphQL */ `
  query SyncComponentPositions(
    $filter: ModelComponentPositionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComponentPositions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        x
        y
        characterID
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
