import { defineType, defineField } from "sanity";

export const model = defineType({
  name: "model",
  title: "Model",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headshot",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gender",
      type: "string",
      options: {
        list: [
          { title: "Female", value: "female" },
          { title: "Male", value: "male" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    // female only fields
    defineField({
      name: "bust",
      type: "number",
      hidden: ({ parent }) => (parent?.gender === "female" ? false : true),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hips",
      type: "number",
      hidden: ({ parent }) => (parent?.gender === "female" ? false : true),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dress",
      type: "number",
      hidden: ({ parent }) => (parent?.gender === "female" ? false : true),
      validation: (rule) => rule.required(),
    }),
    // male only fields
    defineField({
      name: "chest",
      type: "number",
      hidden: ({ parent }) => (parent?.gender === "male" ? false : true),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "inseam",
      type: "number",
      hidden: ({ parent }) => (parent?.gender === "male" ? false : true),
    }),
    // common fields
    defineField({
      name: "height",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "waist",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eyes",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hair",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shoe",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tag",
      type: "string",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Normal", value: "normal" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
