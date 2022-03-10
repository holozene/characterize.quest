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
export const getClassLevel = /* GraphQL */ `
  query GetClassLevel($id: ID!) {
    getClassLevel(id: $id) {
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
export const listClassLevels = /* GraphQL */ `
  query ListClassLevels(
    $filter: ModelClassLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClassLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncClassLevels = /* GraphQL */ `
  query SyncClassLevels(
    $filter: ModelClassLevelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClassLevels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getClass5e = /* GraphQL */ `
  query GetClass5e($id: ID!) {
    getClass5e(id: $id) {
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
export const listClass5es = /* GraphQL */ `
  query ListClass5es(
    $filter: ModelClass5eFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClass5es(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        hitDice
        save1
        save2
        numSkills
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
export const syncClass5es = /* GraphQL */ `
  query SyncClass5es(
    $filter: ModelClass5eFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClass5es(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        hitDice
        save1
        save2
        numSkills
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
export const getSubclass = /* GraphQL */ `
  query GetSubclass($id: ID!) {
    getSubclass(id: $id) {
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
export const listSubclasses = /* GraphQL */ `
  query ListSubclasses(
    $filter: ModelSubclassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubclasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        classID
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
export const syncSubclasses = /* GraphQL */ `
  query SyncSubclasses(
    $filter: ModelSubclassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubclasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        classID
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
export const getFeature = /* GraphQL */ `
  query GetFeature($id: ID!) {
    getFeature(id: $id) {
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
export const listFeatures = /* GraphQL */ `
  query ListFeatures(
    $filter: ModelFeatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeatures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncFeatures = /* GraphQL */ `
  query SyncFeatures(
    $filter: ModelFeatureFilterInput
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
      nextToken
      startedAt
    }
  }
`;
export const getSpell = /* GraphQL */ `
  query GetSpell($id: ID!) {
    getSpell(id: $id) {
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
export const listSpells = /* GraphQL */ `
  query ListSpells(
    $filter: ModelSpellFilterInput
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
        classID
        subclassID
        featureID
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
    $filter: ModelSpellFilterInput
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
        classID
        subclassID
        featureID
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
export const getSkillScore = /* GraphQL */ `
  query GetSkillScore($id: ID!) {
    getSkillScore(id: $id) {
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
export const listSkillScores = /* GraphQL */ `
  query ListSkillScores(
    $filter: ModelSkillScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkillScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSkillScores = /* GraphQL */ `
  query SyncSkillScores(
    $filter: ModelSkillScoreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSkillScores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
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
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSkills = /* GraphQL */ `
  query SyncSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSkills(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getEquipment = /* GraphQL */ `
  query GetEquipment($id: ID!) {
    getEquipment(id: $id) {
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
export const listEquipment = /* GraphQL */ `
  query ListEquipment(
    $filter: ModelEquipmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipment(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEquipment = /* GraphQL */ `
  query SyncEquipment(
    $filter: ModelEquipmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEquipment(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncItems = /* GraphQL */ `
  query SyncItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getFluency = /* GraphQL */ `
  query GetFluency($id: ID!) {
    getFluency(id: $id) {
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
export const listFluencies = /* GraphQL */ `
  query ListFluencies(
    $filter: ModelFluencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFluencies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncFluencies = /* GraphQL */ `
  query SyncFluencies(
    $filter: ModelFluencyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFluencies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLanguage = /* GraphQL */ `
  query GetLanguage($id: ID!) {
    getLanguage(id: $id) {
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
export const listLanguages = /* GraphQL */ `
  query ListLanguages(
    $filter: ModelLanguageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLanguages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
export const syncLanguages = /* GraphQL */ `
  query SyncLanguages(
    $filter: ModelLanguageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLanguages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
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
      showInMenu
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
        showInMenu
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
        showInMenu
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
