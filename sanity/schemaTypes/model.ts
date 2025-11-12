import { defineType, defineField } from "sanity";

export const model = defineType({
  name: "model",
  title: "Model",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      description: "Full name of the model",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      description: "URL friendly identifier",
      options: {
        source: "name",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headshot",
      type: "image",
      description: "Upload a headshot photo of the model",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gender",
      type: "string",
      description: "Select the gender of the model",
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
      description: "Bust measurement in inches",
      hidden: ({ parent }) => (parent?.gender === "female" ? false : true),
    }),
    defineField({
      name: "hips",
      type: "number",
      description: "Hips measurement in inches",
      hidden: ({ parent }) => (parent?.gender === "female" ? false : true),
    }),
    defineField({
      name: "dress",
      type: "number",
      description: "Dress size",
      hidden: ({ parent }) => (parent?.gender === "female" ? false : true),
    }),
    // male only fields
    defineField({
      name: "chest",
      type: "number",
      description: "Chest measurement in inches",
      hidden: ({ parent }) => (parent?.gender === "male" ? false : true),
    }),
    defineField({
      name: "inseam",
      type: "number",
      description: "Inseam measurement in inches",
      hidden: ({ parent }) => (parent?.gender === "male" ? false : true),
    }),
    // common fields
    defineField({
      name: "height",
      type: "string",
      description: "Height in feet and inches (e.g., 5'9)",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "waist",
      type: "number",
      description: "Waist measurement in inches",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eyes",
      type: "string",
      description: "Eye color",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hair",
      type: "string",
      description: "Hair color",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shoe",
      type: "number",
      description: "Shoe size",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      type: "array",
      description:
        "Upload photos to the model's gallery. Minimum 1, maximum 10 images.",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
      validation: (rule) => rule.required().min(1).max(10),
    }),
    defineField({
      name: "tag",
      type: "string",
      description:
        "Tag the model as 'Top'(shows on homepage and should be limited to a maximum of 6) or 'Normal'",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Normal", value: "normal" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
