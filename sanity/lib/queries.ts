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
