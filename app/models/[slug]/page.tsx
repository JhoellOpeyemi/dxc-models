import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";
import { prefetchModelDetails } from "@/sanity/lib/prefetch";
import { models } from "@/data/models";
import ModelDetails from "@/components/ModelDetails/ModelDetails";

export default async function ModelDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const queryClient = getQueryClient();
  const { slug } = await params;

  await prefetchModelDetails(queryClient, slug);

  return (
    <main className="container model-details-page-container">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ModelDetails slug={slug} model={models[2]} />
      </HydrationBoundary>
    </main>
  );
}
