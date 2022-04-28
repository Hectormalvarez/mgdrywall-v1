// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MGDWorkNote, MGDImage, MGDClient, MGDProject } = initSchema(schema);

export {
  MGDWorkNote,
  MGDImage,
  MGDClient,
  MGDProject
};