/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMGDWorkNote = /* GraphQL */ `
  subscription OnCreateMGDWorkNote($owner: String) {
    onCreateMGDWorkNote(owner: $owner) {
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
export const onUpdateMGDWorkNote = /* GraphQL */ `
  subscription OnUpdateMGDWorkNote($owner: String) {
    onUpdateMGDWorkNote(owner: $owner) {
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
export const onDeleteMGDWorkNote = /* GraphQL */ `
  subscription OnDeleteMGDWorkNote($owner: String) {
    onDeleteMGDWorkNote(owner: $owner) {
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
export const onCreateMGDClient = /* GraphQL */ `
  subscription OnCreateMGDClient($owner: String) {
    onCreateMGDClient(owner: $owner) {
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
export const onUpdateMGDClient = /* GraphQL */ `
  subscription OnUpdateMGDClient($owner: String) {
    onUpdateMGDClient(owner: $owner) {
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
export const onDeleteMGDClient = /* GraphQL */ `
  subscription OnDeleteMGDClient($owner: String) {
    onDeleteMGDClient(owner: $owner) {
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
export const onCreateMGDImage = /* GraphQL */ `
  subscription OnCreateMGDImage($owner: String) {
    onCreateMGDImage(owner: $owner) {
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
export const onUpdateMGDImage = /* GraphQL */ `
  subscription OnUpdateMGDImage($owner: String) {
    onUpdateMGDImage(owner: $owner) {
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
export const onDeleteMGDImage = /* GraphQL */ `
  subscription OnDeleteMGDImage($owner: String) {
    onDeleteMGDImage(owner: $owner) {
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
export const onCreateMGDProject = /* GraphQL */ `
  subscription OnCreateMGDProject($owner: String) {
    onCreateMGDProject(owner: $owner) {
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
export const onUpdateMGDProject = /* GraphQL */ `
  subscription OnUpdateMGDProject($owner: String) {
    onUpdateMGDProject(owner: $owner) {
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
export const onDeleteMGDProject = /* GraphQL */ `
  subscription OnDeleteMGDProject($owner: String) {
    onDeleteMGDProject(owner: $owner) {
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
