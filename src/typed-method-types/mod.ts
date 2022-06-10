// This file is intended as a way to add custom types for specific methods beyond the autogenerated method types
// It is meant to be additive to the SlackClient type
import { TypedAppsMethodTypes } from "./apps.ts";
import { TypedWorkflowsMethodTypes } from "./workflows.ts";

export const methodsWithCustomTypes = [
  "apps.datastore.delete",
  "apps.datastore.get",
  "apps.datastore.put",
  "apps.datastore.query",
  "workflows.triggers.create",
];

export type TypedSlackAPIMethodsType =
  & TypedAppsMethodTypes
  & TypedWorkflowsMethodTypes;
