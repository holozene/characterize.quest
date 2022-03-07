/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCharacter5e = /* GraphQL */ `
  mutation CreateCharacter5e(
    $input: CreateCharacter5eInput!
    $condition: ModelCharacter5eConditionInput
  ) {
    createCharacter5e(input: $input, condition: $condition) {
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
export const updateCharacter5e = /* GraphQL */ `
  mutation UpdateCharacter5e(
    $input: UpdateCharacter5eInput!
    $condition: ModelCharacter5eConditionInput
  ) {
    updateCharacter5e(input: $input, condition: $condition) {
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
export const deleteCharacter5e = /* GraphQL */ `
  mutation DeleteCharacter5e(
    $input: DeleteCharacter5eInput!
    $condition: ModelCharacter5eConditionInput
  ) {
    deleteCharacter5e(input: $input, condition: $condition) {
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
export const createComponentPosition = /* GraphQL */ `
  mutation CreateComponentPosition(
    $input: CreateComponentPositionInput!
    $condition: ModelComponentPositionConditionInput
  ) {
    createComponentPosition(input: $input, condition: $condition) {
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
export const updateComponentPosition = /* GraphQL */ `
  mutation UpdateComponentPosition(
    $input: UpdateComponentPositionInput!
    $condition: ModelComponentPositionConditionInput
  ) {
    updateComponentPosition(input: $input, condition: $condition) {
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
export const deleteComponentPosition = /* GraphQL */ `
  mutation DeleteComponentPosition(
    $input: DeleteComponentPositionInput!
    $condition: ModelComponentPositionConditionInput
  ) {
    deleteComponentPosition(input: $input, condition: $condition) {
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
