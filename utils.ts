import { client } from "@/sanity/lib/client";

export const linkArray = [
  { path: "/about", label: "About us" },
  { path: "/models", label: "Models" },
  { path: "/academy", label: "Academy" },
  { path: "/apply", label: "Apply" },
  { path: "/shop", label: "Shop" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const formatIndex = (index: number) => {
  if (index < 10) return `0${index + 1}`;
  else return index;
};

export const getContent = async (query: string) => {
  return await client.fetch(query);
};
