import { useQuery } from "@tanstack/react-query";
import { client } from "./client";
import {
  HOME_MODELS_QUERY,
  BLOGS_QUERY,
  MODELS_QUERY,
  MODEL_DETAILS_QUERY,
} from "./queries";
import { Model, Blog } from "@/sanity/types";

export const useHomeModels = () => {
  return useQuery({
    queryKey: ["home-models"],
    queryFn: async () => {
      const data = await client.fetch<Model[]>(HOME_MODELS_QUERY);
      return data;
    },
  });
};

export const useModels = () => {
  return useQuery({
    queryKey: ["models"],
    queryFn: async () => {
      const data = await client.fetch<Model[]>(MODELS_QUERY);
      return data;
    },
  });
};

export const useModelDetails = (slug: string) => {
  return useQuery({
    queryKey: ["model", slug],
    queryFn: async () => {
      const data = await client.fetch<Model>(MODEL_DETAILS_QUERY, { slug });
      if (!data) {
        throw new Error("Model not found");
      }
      return data;
    },
    enabled: !!slug,
    retry: 1,
  });
};

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const data = await client.fetch<Blog[]>(BLOGS_QUERY);
      return data;
    },
  });
};
