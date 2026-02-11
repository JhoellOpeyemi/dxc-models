import ApplyHero from "@/components/Apply/ApplyHero/ApplyHero";
import ApplyText from "@/components/Apply/ApplyText/ApplyText";
import ApplyInfo from "@/components/Apply/ApplyInfo/ApplyInfo";
import ApplyForm from "@/components/Apply/ApplyForm/ApplyForm";

export default function Apply() {
  return (
    <main className="container">
      <ApplyHero />
      <ApplyText />
      <ApplyInfo />
      <ApplyForm />
    </main>
  );
}
