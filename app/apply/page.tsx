import ApplyHero from "@/components/ApplyHero/ApplyHero";
import ApplyText from "@/components/ApplyText/ApplyText";
import ApplyInfo from "@/components/ApplyInfo/ApplyInfo";
import ApplyForm from "@/components/ApplyForm/ApplyForm";

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
