import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";
import { prefetchModels } from "@/sanity/lib/prefetch";

import ModelsHeading from "@/components/ModelsHeading/ModelsHeading";
import Models from "@/components/Models/Models";

const modelMain: React.CSSProperties = {
  height: "100vh",
  minHeight: "100svh",
  position: "relative",
  paddingTop: "13vh",
};
export default async function ModelsPage() {
  const queryClient = getQueryClient();

  await prefetchModels(queryClient);

  return (
    <main style={modelMain}>
      <div className="container">
        <ModelsHeading />
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Models />
      </HydrationBoundary>
    </main>
  );
}
