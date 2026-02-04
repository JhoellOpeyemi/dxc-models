import { type SchemaTypeDefinition } from "sanity";
import { blog } from "./blog";
import { model } from "./model";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, model],
};
