import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MGDWorkNoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MGDImageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MGDClientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MGDProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MGDWorkNote {
  readonly id: string;
  readonly title?: string | null;
  readonly noteText?: string | null;
  readonly Images?: (MGDImage | null)[] | null;
  readonly Projects?: (MGDImage | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MGDWorkNote, MGDWorkNoteMetaData>);
  static copyOf(source: MGDWorkNote, mutator: (draft: MutableModel<MGDWorkNote, MGDWorkNoteMetaData>) => MutableModel<MGDWorkNote, MGDWorkNoteMetaData> | void): MGDWorkNote;
}

export declare class MGDImage {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly projectID: string;
  readonly worknoteID?: string | null;
  readonly imageKey: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MGDImage, MGDImageMetaData>);
  static copyOf(source: MGDImage, mutator: (draft: MutableModel<MGDImage, MGDImageMetaData>) => MutableModel<MGDImage, MGDImageMetaData> | void): MGDImage;
}

export declare class MGDClient {
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly Projects?: (MGDProject | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MGDClient, MGDClientMetaData>);
  static copyOf(source: MGDClient, mutator: (draft: MutableModel<MGDClient, MGDClientMetaData>) => MutableModel<MGDClient, MGDClientMetaData> | void): MGDClient;
}

export declare class MGDProject {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly startDate?: string | null;
  readonly finishDate?: string | null;
  readonly city?: string | null;
  readonly isFinished?: boolean | null;
  readonly Images?: (MGDImage | null)[] | null;
  readonly clientID: string;
  readonly worknoteID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MGDProject, MGDProjectMetaData>);
  static copyOf(source: MGDProject, mutator: (draft: MutableModel<MGDProject, MGDProjectMetaData>) => MutableModel<MGDProject, MGDProjectMetaData> | void): MGDProject;
}