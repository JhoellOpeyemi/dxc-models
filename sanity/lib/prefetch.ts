import { QueryClient } from "@tanstack/react-query";
import { client } from "./client";
import {
  HOME_MODELS_QUERY,
  BLOGS_QUERY,
  MODELS_QUERY,
  MODEL_DETAILS_QUERY,
} from "./queries";

export async function prefetchHomeModels(queryClient: QueryClient) {
  try {
    await queryClient.prefetchQuery({
      queryKey: ["home-models"],
      queryFn: async () => {
        const data = await client.fetch(HOME_MODELS_QUERY);
        return data;
      },
    });
  } catch (error) {
    console.error("Error prefetching home models:", error);
    // Don't throw - allow page to render with fallback
  }
}

export async function prefetchModels(queryClient: QueryClient) {
  try {
    await queryClient.prefetchQuery({
      queryKey: ["models"],
      queryFn: async () => {
        const data = await client.fetch(MODELS_QUERY);
        return data;
      },
    });
  } catch (error) {
    console.error("Error prefetching models:", error);
    // Don't throw - allow page to render with fallback
  }
}

export async function prefetchModelDetails(
  queryClient: QueryClient,
  slug: string,
) {
  try {
    await queryClient.prefetchQuery({
      queryKey: ["model", slug],
      queryFn: async () => {
        const data = await client.fetch(MODEL_DETAILS_QUERY, { slug });
        if (!data) {
          throw new Error("Model not found");
        }
        return data;
      },
    });
  } catch (error) {
    console.error("Error prefetching model details:", error);
    // Don't throw - allow page to render with fallback
  }
}

export async function prefetchBlogs(queryClient: QueryClient) {
  try {
    await queryClient.prefetchQuery({
      queryKey: ["blogs"],
      queryFn: async () => {
        const data = await client.fetch(BLOGS_QUERY);
        return data;
      },
    });
  } catch (error) {
    console.error("Error prefetching blogs:", error);
    // Don't throw - allow page to render with fallback
  }
}
