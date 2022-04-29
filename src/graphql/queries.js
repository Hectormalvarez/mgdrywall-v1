/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMGDWorkNote = /* GraphQL */ `
  query GetMGDWorkNote($id: ID!) {
    getMGDWorkNote(id: $id) {
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
export const listMGDWorkNotes = /* GraphQL */ `
  query ListMGDWorkNotes(
    $filter: ModelMGDWorkNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMGDWorkNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMGDWorkNotes = /* GraphQL */ `
  query SyncMGDWorkNotes(
    $filter: ModelMGDWorkNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMGDWorkNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMGDClient = /* GraphQL */ `
  query GetMGDClient($id: ID!) {
    getMGDClient(id: $id) {
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
export const listMGDClients = /* GraphQL */ `
  query ListMGDClients(
    $filter: ModelMGDClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMGDClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMGDClients = /* GraphQL */ `
  query SyncMGDClients(
    $filter: ModelMGDClientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMGDClients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMGDImage = /* GraphQL */ `
  query GetMGDImage($id: ID!) {
    getMGDImage(id: $id) {
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
export const listMGDImages = /* GraphQL */ `
  query ListMGDImages(
    $filter: ModelMGDImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMGDImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
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
      nextToken
      startedAt
    }
  }
`;
export const syncMGDImages = /* GraphQL */ `
  query SyncMGDImages(
    $filter: ModelMGDImageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMGDImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
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
      nextToken
      startedAt
    }
  }
`;
export const getMGDProject = /* GraphQL */ `
  query GetMGDProject($id: ID!) {
    getMGDProject(id: $id) {
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
export const listMGDProjects = /* GraphQL */ `
  query ListMGDProjects(
    $filter: ModelMGDProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMGDProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMGDProjects = /* GraphQL */ `
  query SyncMGDProjects(
    $filter: ModelMGDProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMGDProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
