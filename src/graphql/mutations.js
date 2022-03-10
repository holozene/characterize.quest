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
      walkSpeed
      maxHP
      curHP
      tempHP
      deathPasses
      deathFails
      inspiration
      exhaustion
      notes
      race
      ClassLevels {
        nextToken
        startedAt
      }
      SkillScores {
        nextToken
        startedAt
      }
      Feats {
        nextToken
        startedAt
      }
      Equipment {
        nextToken
        startedAt
      }
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
      walkSpeed
      maxHP
      curHP
      tempHP
      deathPasses
      deathFails
      inspiration
      exhaustion
      notes
      race
      ClassLevels {
        nextToken
        startedAt
      }
      SkillScores {
        nextToken
        startedAt
      }
      Feats {
        nextToken
        startedAt
      }
      Equipment {
        nextToken
        startedAt
      }
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
      walkSpeed
      maxHP
      curHP
      tempHP
      deathPasses
      deathFails
      inspiration
      exhaustion
      notes
      race
      ClassLevels {
        nextToken
        startedAt
      }
      SkillScores {
        nextToken
        startedAt
      }
      Feats {
        nextToken
        startedAt
      }
      Equipment {
        nextToken
        startedAt
      }
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
export const createClassLevel = /* GraphQL */ `
  mutation CreateClassLevel(
    $input: CreateClassLevelInput!
    $condition: ModelClassLevelConditionInput
  ) {
    createClassLevel(input: $input, condition: $condition) {
      id
      level
      characterID
      classID
      subclassID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateClassLevel = /* GraphQL */ `
  mutation UpdateClassLevel(
    $input: UpdateClassLevelInput!
    $condition: ModelClassLevelConditionInput
  ) {
    updateClassLevel(input: $input, condition: $condition) {
      id
      level
      characterID
      classID
      subclassID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteClassLevel = /* GraphQL */ `
  mutation DeleteClassLevel(
    $input: DeleteClassLevelInput!
    $condition: ModelClassLevelConditionInput
  ) {
    deleteClassLevel(input: $input, condition: $condition) {
      id
      level
      characterID
      classID
      subclassID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createClass5e = /* GraphQL */ `
  mutation CreateClass5e(
    $input: CreateClass5eInput!
    $condition: ModelClass5eConditionInput
  ) {
    createClass5e(input: $input, condition: $condition) {
      id
      name
      description
      hitDice
      save1
      save2
      numSkills
      Skills {
        nextToken
        startedAt
      }
      Features {
        nextToken
        startedAt
      }
      Subclasses {
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
export const updateClass5e = /* GraphQL */ `
  mutation UpdateClass5e(
    $input: UpdateClass5eInput!
    $condition: ModelClass5eConditionInput
  ) {
    updateClass5e(input: $input, condition: $condition) {
      id
      name
      description
      hitDice
      save1
      save2
      numSkills
      Skills {
        nextToken
        startedAt
      }
      Features {
        nextToken
        startedAt
      }
      Subclasses {
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
export const deleteClass5e = /* GraphQL */ `
  mutation DeleteClass5e(
    $input: DeleteClass5eInput!
    $condition: ModelClass5eConditionInput
  ) {
    deleteClass5e(input: $input, condition: $condition) {
      id
      name
      description
      hitDice
      save1
      save2
      numSkills
      Skills {
        nextToken
        startedAt
      }
      Features {
        nextToken
        startedAt
      }
      Subclasses {
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
export const createSubclass = /* GraphQL */ `
  mutation CreateSubclass(
    $input: CreateSubclassInput!
    $condition: ModelSubclassConditionInput
  ) {
    createSubclass(input: $input, condition: $condition) {
      id
      name
      description
      classID
      Features {
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
export const updateSubclass = /* GraphQL */ `
  mutation UpdateSubclass(
    $input: UpdateSubclassInput!
    $condition: ModelSubclassConditionInput
  ) {
    updateSubclass(input: $input, condition: $condition) {
      id
      name
      description
      classID
      Features {
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
export const deleteSubclass = /* GraphQL */ `
  mutation DeleteSubclass(
    $input: DeleteSubclassInput!
    $condition: ModelSubclassConditionInput
  ) {
    deleteSubclass(input: $input, condition: $condition) {
      id
      name
      description
      classID
      Features {
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
export const createFeature = /* GraphQL */ `
  mutation CreateFeature(
    $input: CreateFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    createFeature(input: $input, condition: $condition) {
      id
      level
      name
      description
      feat
      characterID
      classID
      subclassID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateFeature = /* GraphQL */ `
  mutation UpdateFeature(
    $input: UpdateFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    updateFeature(input: $input, condition: $condition) {
      id
      level
      name
      description
      feat
      characterID
      classID
      subclassID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteFeature = /* GraphQL */ `
  mutation DeleteFeature(
    $input: DeleteFeatureInput!
    $condition: ModelFeatureConditionInput
  ) {
    deleteFeature(input: $input, condition: $condition) {
      id
      level
      name
      description
      feat
      characterID
      classID
      subclassID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSpell = /* GraphQL */ `
  mutation CreateSpell(
    $input: CreateSpellInput!
    $condition: ModelSpellConditionInput
  ) {
    createSpell(input: $input, condition: $condition) {
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
      classID
      subclassID
      featureID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSpell = /* GraphQL */ `
  mutation UpdateSpell(
    $input: UpdateSpellInput!
    $condition: ModelSpellConditionInput
  ) {
    updateSpell(input: $input, condition: $condition) {
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
      classID
      subclassID
      featureID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSpell = /* GraphQL */ `
  mutation DeleteSpell(
    $input: DeleteSpellInput!
    $condition: ModelSpellConditionInput
  ) {
    deleteSpell(input: $input, condition: $condition) {
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
      classID
      subclassID
      featureID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSkillScore = /* GraphQL */ `
  mutation CreateSkillScore(
    $input: CreateSkillScoreInput!
    $condition: ModelSkillScoreConditionInput
  ) {
    createSkillScore(input: $input, condition: $condition) {
      id
      halfProf
      Prof
      doubleProf
      characterID
      skillID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSkillScore = /* GraphQL */ `
  mutation UpdateSkillScore(
    $input: UpdateSkillScoreInput!
    $condition: ModelSkillScoreConditionInput
  ) {
    updateSkillScore(input: $input, condition: $condition) {
      id
      halfProf
      Prof
      doubleProf
      characterID
      skillID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSkillScore = /* GraphQL */ `
  mutation DeleteSkillScore(
    $input: DeleteSkillScoreInput!
    $condition: ModelSkillScoreConditionInput
  ) {
    deleteSkillScore(input: $input, condition: $condition) {
      id
      halfProf
      Prof
      doubleProf
      characterID
      skillID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
      id
      name
      attribute
      classID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
      id
      name
      attribute
      classID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
      id
      name
      attribute
      classID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEquipment = /* GraphQL */ `
  mutation CreateEquipment(
    $input: CreateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    createEquipment(input: $input, condition: $condition) {
      id
      quantity
      condition
      equipped
      proficency
      characterID
      itemID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEquipment = /* GraphQL */ `
  mutation UpdateEquipment(
    $input: UpdateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    updateEquipment(input: $input, condition: $condition) {
      id
      quantity
      condition
      equipped
      proficency
      characterID
      itemID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEquipment = /* GraphQL */ `
  mutation DeleteEquipment(
    $input: DeleteEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    deleteEquipment(input: $input, condition: $condition) {
      id
      quantity
      condition
      equipped
      proficency
      characterID
      itemID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      name
      type
      weightlbs
      valuegp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      name
      type
      weightlbs
      valuegp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      name
      type
      weightlbs
      valuegp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createFluency = /* GraphQL */ `
  mutation CreateFluency(
    $input: CreateFluencyInput!
    $condition: ModelFluencyConditionInput
  ) {
    createFluency(input: $input, condition: $condition) {
      id
      read
      write
      characterID
      languageID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateFluency = /* GraphQL */ `
  mutation UpdateFluency(
    $input: UpdateFluencyInput!
    $condition: ModelFluencyConditionInput
  ) {
    updateFluency(input: $input, condition: $condition) {
      id
      read
      write
      characterID
      languageID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteFluency = /* GraphQL */ `
  mutation DeleteFluency(
    $input: DeleteFluencyInput!
    $condition: ModelFluencyConditionInput
  ) {
    deleteFluency(input: $input, condition: $condition) {
      id
      read
      write
      characterID
      languageID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createLanguage = /* GraphQL */ `
  mutation CreateLanguage(
    $input: CreateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    createLanguage(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLanguage = /* GraphQL */ `
  mutation UpdateLanguage(
    $input: UpdateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    updateLanguage(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLanguage = /* GraphQL */ `
  mutation DeleteLanguage(
    $input: DeleteLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    deleteLanguage(input: $input, condition: $condition) {
      id
      name
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
      showInMenu
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
      showInMenu
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
      showInMenu
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
