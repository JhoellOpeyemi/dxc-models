import About from "@/components/About/AboutIntro/AboutIntro";
import AboutImage from "@/components/About/AboutImage/AboutImage";
import Statements from "@/components/About/Statements/Statements";
import Divider from "@/components/ui/Divider";
import Value from "@/components/About/Value/Value";

export default function AboutPage() {
  return (
    <div className="container">
      <main>
        <About />
        <AboutImage />
        <Divider />
        <Statements />
        <Divider />
        <Value />
      </main>
    </div>
  );
}
