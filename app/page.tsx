import Hero from "@/components/Hero/Hero";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeModels from "@/components/HomeModels/HomeModels";
import HomeFeatures from "@/components/HomeFeatures/HomeFeatures";
import Testimonials from "@/components/Testimonials/Testimonials";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <div className="container">
      <main>
        <Hero />
        <Divider />
        <HomeAbout />
        <Divider />
        <HomeModels />
        <Divider />
        <HomeFeatures />
        <Testimonials />
      </main>
    </div>
  );
}
