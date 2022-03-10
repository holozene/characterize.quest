/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCharacter5e = /* GraphQL */ `
  subscription OnCreateCharacter5e {
    onCreateCharacter5e {
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
export const onUpdateCharacter5e = /* GraphQL */ `
  subscription OnUpdateCharacter5e {
    onUpdateCharacter5e {
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
export const onDeleteCharacter5e = /* GraphQL */ `
  subscription OnDeleteCharacter5e {
    onDeleteCharacter5e {
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
export const onCreateClassLevel = /* GraphQL */ `
  subscription OnCreateClassLevel {
    onCreateClassLevel {
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
export const onUpdateClassLevel = /* GraphQL */ `
  subscription OnUpdateClassLevel {
    onUpdateClassLevel {
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
export const onDeleteClassLevel = /* GraphQL */ `
  subscription OnDeleteClassLevel {
    onDeleteClassLevel {
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
export const onCreateClass5e = /* GraphQL */ `
  subscription OnCreateClass5e {
    onCreateClass5e {
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
export const onUpdateClass5e = /* GraphQL */ `
  subscription OnUpdateClass5e {
    onUpdateClass5e {
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
export const onDeleteClass5e = /* GraphQL */ `
  subscription OnDeleteClass5e {
    onDeleteClass5e {
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
export const onCreateSubclass = /* GraphQL */ `
  subscription OnCreateSubclass {
    onCreateSubclass {
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
export const onUpdateSubclass = /* GraphQL */ `
  subscription OnUpdateSubclass {
    onUpdateSubclass {
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
export const onDeleteSubclass = /* GraphQL */ `
  subscription OnDeleteSubclass {
    onDeleteSubclass {
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
export const onCreateFeature = /* GraphQL */ `
  subscription OnCreateFeature {
    onCreateFeature {
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
export const onUpdateFeature = /* GraphQL */ `
  subscription OnUpdateFeature {
    onUpdateFeature {
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
export const onDeleteFeature = /* GraphQL */ `
  subscription OnDeleteFeature {
    onDeleteFeature {
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
export const onCreateSpell = /* GraphQL */ `
  subscription OnCreateSpell {
    onCreateSpell {
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
export const onUpdateSpell = /* GraphQL */ `
  subscription OnUpdateSpell {
    onUpdateSpell {
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
export const onDeleteSpell = /* GraphQL */ `
  subscription OnDeleteSpell {
    onDeleteSpell {
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
export const onCreateSkillScore = /* GraphQL */ `
  subscription OnCreateSkillScore {
    onCreateSkillScore {
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
export const onUpdateSkillScore = /* GraphQL */ `
  subscription OnUpdateSkillScore {
    onUpdateSkillScore {
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
export const onDeleteSkillScore = /* GraphQL */ `
  subscription OnDeleteSkillScore {
    onDeleteSkillScore {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
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
export const onCreateEquipment = /* GraphQL */ `
  subscription OnCreateEquipment {
    onCreateEquipment {
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
export const onUpdateEquipment = /* GraphQL */ `
  subscription OnUpdateEquipment {
    onUpdateEquipment {
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
export const onDeleteEquipment = /* GraphQL */ `
  subscription OnDeleteEquipment {
    onDeleteEquipment {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateFluency = /* GraphQL */ `
  subscription OnCreateFluency {
    onCreateFluency {
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
export const onUpdateFluency = /* GraphQL */ `
  subscription OnUpdateFluency {
    onUpdateFluency {
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
export const onDeleteFluency = /* GraphQL */ `
  subscription OnDeleteFluency {
    onDeleteFluency {
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
export const onCreateLanguage = /* GraphQL */ `
  subscription OnCreateLanguage {
    onCreateLanguage {
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
export const onUpdateLanguage = /* GraphQL */ `
  subscription OnUpdateLanguage {
    onUpdateLanguage {
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
export const onDeleteLanguage = /* GraphQL */ `
  subscription OnDeleteLanguage {
    onDeleteLanguage {
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
export const onCreateComponentPosition = /* GraphQL */ `
  subscription OnCreateComponentPosition {
    onCreateComponentPosition {
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
export const onUpdateComponentPosition = /* GraphQL */ `
  subscription OnUpdateComponentPosition {
    onUpdateComponentPosition {
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
export const onDeleteComponentPosition = /* GraphQL */ `
  subscription OnDeleteComponentPosition {
    onDeleteComponentPosition {
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
export const onCreateComponent = /* GraphQL */ `
  subscription OnCreateComponent {
    onCreateComponent {
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
export const onUpdateComponent = /* GraphQL */ `
  subscription OnUpdateComponent {
    onUpdateComponent {
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
export const onDeleteComponent = /* GraphQL */ `
  subscription OnDeleteComponent {
    onDeleteComponent {
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
export const onCreateComponentItem = /* GraphQL */ `
  subscription OnCreateComponentItem {
    onCreateComponentItem {
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
export const onUpdateComponentItem = /* GraphQL */ `
  subscription OnUpdateComponentItem {
    onUpdateComponentItem {
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
export const onDeleteComponentItem = /* GraphQL */ `
  subscription OnDeleteComponentItem {
    onDeleteComponentItem {
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
export const onCreateComponentInput = /* GraphQL */ `
  subscription OnCreateComponentInput {
    onCreateComponentInput {
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
export const onUpdateComponentInput = /* GraphQL */ `
  subscription OnUpdateComponentInput {
    onUpdateComponentInput {
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
export const onDeleteComponentInput = /* GraphQL */ `
  subscription OnDeleteComponentInput {
    onDeleteComponentInput {
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
export const onCreateComponentOutput = /* GraphQL */ `
  subscription OnCreateComponentOutput {
    onCreateComponentOutput {
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
export const onUpdateComponentOutput = /* GraphQL */ `
  subscription OnUpdateComponentOutput {
    onUpdateComponentOutput {
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
export const onDeleteComponentOutput = /* GraphQL */ `
  subscription OnDeleteComponentOutput {
    onDeleteComponentOutput {
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
