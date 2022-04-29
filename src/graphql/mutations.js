/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMGDWorkNote = /* GraphQL */ `
  mutation CreateMGDWorkNote(
    $input: CreateMGDWorkNoteInput!
    $condition: ModelMGDWorkNoteConditionInput
  ) {
    createMGDWorkNote(input: $input, condition: $condition) {
      id
      title
      noteText
      Images {
        nextToken
        startedAt
      }
      Projects {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateMGDWorkNote = /* GraphQL */ `
  mutation UpdateMGDWorkNote(
    $input: UpdateMGDWorkNoteInput!
    $condition: ModelMGDWorkNoteConditionInput
  ) {
    updateMGDWorkNote(input: $input, condition: $condition) {
      id
      title
      noteText
      Images {
        nextToken
        startedAt
      }
      Projects {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteMGDWorkNote = /* GraphQL */ `
  mutation DeleteMGDWorkNote(
    $input: DeleteMGDWorkNoteInput!
    $condition: ModelMGDWorkNoteConditionInput
  ) {
    deleteMGDWorkNote(input: $input, condition: $condition) {
      id
      title
      noteText
      Images {
        nextToken
        startedAt
      }
      Projects {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createMGDClient = /* GraphQL */ `
  mutation CreateMGDClient(
    $input: CreateMGDClientInput!
    $condition: ModelMGDClientConditionInput
  ) {
    createMGDClient(input: $input, condition: $condition) {
      id
      name
      email
      phoneNumber
      address
      city
      Projects {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateMGDClient = /* GraphQL */ `
  mutation UpdateMGDClient(
    $input: UpdateMGDClientInput!
    $condition: ModelMGDClientConditionInput
  ) {
    updateMGDClient(input: $input, condition: $condition) {
      id
      name
      email
      phoneNumber
      address
      city
      Projects {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteMGDClient = /* GraphQL */ `
  mutation DeleteMGDClient(
    $input: DeleteMGDClientInput!
    $condition: ModelMGDClientConditionInput
  ) {
    deleteMGDClient(input: $input, condition: $condition) {
      id
      name
      email
      phoneNumber
      address
      city
      Projects {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createMGDImage = /* GraphQL */ `
  mutation CreateMGDImage(
    $input: CreateMGDImageInput!
    $condition: ModelMGDImageConditionInput
  ) {
    createMGDImage(input: $input, condition: $condition) {
      id
      title
      description
      projectID {
        id
        title
        description
        startDate
        finishDate
        city
        isFinished
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        mGDWorkNoteProjectsId
        mGDClientProjectsId
        owner
      }
      worknoteID {
        id
        title
        noteText
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      imageKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      mGDWorkNoteImagesId
      mGDProjectImagesId
      owner
    }
  }
`;
export const updateMGDImage = /* GraphQL */ `
  mutation UpdateMGDImage(
    $input: UpdateMGDImageInput!
    $condition: ModelMGDImageConditionInput
  ) {
    updateMGDImage(input: $input, condition: $condition) {
      id
      title
      description
      projectID {
        id
        title
        description
        startDate
        finishDate
        city
        isFinished
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        mGDWorkNoteProjectsId
        mGDClientProjectsId
        owner
      }
      worknoteID {
        id
        title
        noteText
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      imageKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      mGDWorkNoteImagesId
      mGDProjectImagesId
      owner
    }
  }
`;
export const deleteMGDImage = /* GraphQL */ `
  mutation DeleteMGDImage(
    $input: DeleteMGDImageInput!
    $condition: ModelMGDImageConditionInput
  ) {
    deleteMGDImage(input: $input, condition: $condition) {
      id
      title
      description
      projectID {
        id
        title
        description
        startDate
        finishDate
        city
        isFinished
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        mGDWorkNoteProjectsId
        mGDClientProjectsId
        owner
      }
      worknoteID {
        id
        title
        noteText
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      imageKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      mGDWorkNoteImagesId
      mGDProjectImagesId
      owner
    }
  }
`;
export const createMGDProject = /* GraphQL */ `
  mutation CreateMGDProject(
    $input: CreateMGDProjectInput!
    $condition: ModelMGDProjectConditionInput
  ) {
    createMGDProject(input: $input, condition: $condition) {
      id
      title
      description
      startDate
      finishDate
      city
      isFinished
      Images {
        nextToken
        startedAt
      }
      client {
        id
        name
        email
        phoneNumber
        address
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      worknote {
        id
        title
        noteText
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      mGDWorkNoteProjectsId
      mGDClientProjectsId
      owner
    }
  }
`;
export const updateMGDProject = /* GraphQL */ `
  mutation UpdateMGDProject(
    $input: UpdateMGDProjectInput!
    $condition: ModelMGDProjectConditionInput
  ) {
    updateMGDProject(input: $input, condition: $condition) {
      id
      title
      description
      startDate
      finishDate
      city
      isFinished
      Images {
        nextToken
        startedAt
      }
      client {
        id
        name
        email
        phoneNumber
        address
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      worknote {
        id
        title
        noteText
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      mGDWorkNoteProjectsId
      mGDClientProjectsId
      owner
    }
  }
`;
export const deleteMGDProject = /* GraphQL */ `
  mutation DeleteMGDProject(
    $input: DeleteMGDProjectInput!
    $condition: ModelMGDProjectConditionInput
  ) {
    deleteMGDProject(input: $input, condition: $condition) {
      id
      title
      description
      startDate
      finishDate
      city
      isFinished
      Images {
        nextToken
        startedAt
      }
      client {
        id
        name
        email
        phoneNumber
        address
        city
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      worknote {
        id
        title
        noteText
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      mGDWorkNoteProjectsId
      mGDClientProjectsId
      owner
    }
  }
`;
