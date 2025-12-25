// libraries and hooks imports
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";
import { prefetchModels } from "@/sanity/lib/prefetch";

// context imports
import { ModelsProvider } from "@/components/Models/ModelsProvider";
import { AnimationProvider } from "@/components/Models/Animation/AnimationProvider";

// components imports
import ModelsHeading from "@/components/ModelsHeading/ModelsHeading";
import Models from "@/components/Models/Models";

const modelMain: React.CSSProperties = {
  height: "85vh",
  minHeight: "85svh",
  position: "relative",
};
export default async function ModelsPage() {
  // prefetch data on server for hydration
  const queryClient = getQueryClient();
  await prefetchModels(queryClient);

  return (
    <AnimationProvider>
      <main style={modelMain}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ModelsProvider>
            <div className="container">
              <ModelsHeading />
            </div>
            <Models />
          </ModelsProvider>
        </HydrationBoundary>
      </main>
    </AnimationProvider>
  );
}
