import About from "@/components/About/About";
import AboutImage from "@/components/AboutImage/AboutImage";
import Statements from "@/components/Statements/Statements";
import Divider from "@/components/Divider";
import Value from "@/components/Value/Value";

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
