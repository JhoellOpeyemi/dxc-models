import { client } from "@/sanity/lib/client";

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const formatIndex = (index: number) => {
    if (index < 10) return `0${index + 1}`
    else return index
}

export const getContent = async (query: string) => {
    return await client.fetch(query);
}