import { WorkspaceShell } from "@/components/workspace/workspace-shell";
import { publisherMetrics, authorRows } from "@/components/workspace/workspace-data";

export default function PublisherDashboardPage() {
  return <WorkspaceShell eyebrow="Pilotage éditorial" title="Tableau de bord de la maison" description="Pilotez votre catalogue, accompagnez vos auteurs et suivez les performances de vos publications." metrics={publisherMetrics} rows={authorRows} actionLabel="Ajouter un livre" actionHref="/editeur/livres" />;
}
