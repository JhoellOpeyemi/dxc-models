import { defineQuery } from "next-sanity";

export const BLOGS_QUERY = defineQuery(
  `*[_type =='blog' && defined(slug.current)] | order(_createdAt desc){
        _id,
        _type,
        _createdAt,
        _updatedAt,
        _rev,
        date,
        image,
        title,
        introduction
    }`
);

export const HOME_MODELS_QUERY = defineQuery(
  `*[_type =='model' && defined(slug.current) && tag == 'top'] | order(_createdAt desc) {
        _id,
        _type,
        _createdAt,
        _updatedAt,
        _rev,
        name,
        headshot,
        height,
        bust,
        chest
    }`
);

export const MODELS_QUERY = defineQuery(
  `*[_type =='model' && defined(slug.current)] | order(_createdAt) {
        _id,
        _type,
        _createdAt,
        _updatedAt,
        _rev,
        name,
        headshot,
        height,
        waist,
        eyes,
        hair,
        shoe,
        bust,
        hips,
        dress,
        chest,
        inseam,
    }`
);
