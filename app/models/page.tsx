// libraries and hooks imports
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";
import { prefetchModels } from "@/sanity/lib/prefetch";

// context imports
import { ModelsProvider } from "@/contexts/ModelsProvider";
import { AnimationProvider } from "@/contexts/AnimationProvider";

// components imports
import ModelsHeading from "@/components/ModelsComponents/ModelsHeading/ModelsHeading";
import Models from "@/components/ModelsComponents/Models/Models";

export default async function ModelsPage() {
  // prefetch data on server for hydration
  const queryClient = getQueryClient();

  await prefetchModels(queryClient);

  return (
    <AnimationProvider>
      <main className="model-main">
        <ModelsProvider>
          <div className="container">
            <ModelsHeading />
          </div>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Models />
          </HydrationBoundary>
        </ModelsProvider>
      </main>
    </AnimationProvider>
  );
}
