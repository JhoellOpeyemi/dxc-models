import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";
import { prefetchHomeModels } from "@/sanity/lib/prefetch";

import Hero from "@/components/Hero/Hero";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeModels from "@/components/HomeModels/HomeModels";
import HomeFeatures from "@/components/HomeFeatures/HomeFeatures";
import Testimonials from "@/components/Testimonials/Testimonials";
import Divider from "@/components/Divider";

export default async function Home() {
  const queryClient = getQueryClient();

  await prefetchHomeModels(queryClient);

  return (
    <div className="container">
      <main>
        <Hero />
        <Divider />
        <HomeAbout />
        <Divider />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <HomeModels />
        </HydrationBoundary>
        <Divider />
        <HomeFeatures />
        <Testimonials />
      </main>
    </div>
  );
}
