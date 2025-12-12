import { useQuery } from "@tanstack/react-query";
import { client } from "./client";
import { HOME_MODELS_QUERY, BLOGS_QUERY, MODELS_QUERY } from "./queries";
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

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const data = await client.fetch<Blog[]>(BLOGS_QUERY);
      return data;
    },
  });
};
