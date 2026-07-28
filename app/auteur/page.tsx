import { WorkspaceShell } from "@/components/workspace/workspace-shell";
import { authorMetrics, authorRows } from "@/components/workspace/workspace-data";

export default function AuthorDashboardPage() {
  return <WorkspaceShell eyebrow="Studio créateur" title="Bonjour, votre studio vous attend" description="Suivez vos publications, vos écoutes et la progression de vos prochains livres audio." metrics={authorMetrics} rows={authorRows} actionLabel="Créer un livre" actionHref="/auteur/livres/nouveau" />;
}
