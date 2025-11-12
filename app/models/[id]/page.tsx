import { models } from "@/data/models";
import ModelDetails from "@/components/ModelDetails/ModelDetails";

export default async function ModelDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main className="container model-details-page-container">
      <ModelDetails model={models[parseInt(id, 10)]} />
    </main>
  );
}
