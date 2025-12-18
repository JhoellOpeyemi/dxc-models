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
        "slug": slug.current,
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
        "slug": slug.current,
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

export const MODEL_DETAILS_QUERY = defineQuery(
  `*[_type =='model' && slug.current == $slug][0] {
        _id,
        _type,
        _createdAt,
        _updatedAt,
        _rev,
        name,
        "slug": slug.current,
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
        "gallery": gallery[].asset->url,
        gender
    }`
);
