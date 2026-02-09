import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";
import { prefetchBlogs } from "@/sanity/lib/prefetch";

import BlogHero from "@/components/Blog/BlogHero/BlogHero";
import Blogs from "@/components/Blog/Blogs/Blogs";

export default async function Blog() {
  const queryClient = getQueryClient();

  try {
    await prefetchBlogs(queryClient);
  } catch (error) {
    console.error("Failed to prefetch blogs:", error);
  }

  return (
    <main className="container">
      <BlogHero />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Blogs />
      </HydrationBoundary>
    </main>
  );
}
