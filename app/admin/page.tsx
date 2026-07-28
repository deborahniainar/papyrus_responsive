import { WorkspaceShell } from "@/components/workspace/workspace-shell";
import { adminMetrics, adminRows } from "@/components/workspace/workspace-data";

export default function AdminDashboardPage() {
  return <WorkspaceShell eyebrow="Centre de contrôle" title="Administration PAPYRUS" description="Supervisez les comptes, les auteurs, le catalogue et les publications en attente de validation." metrics={adminMetrics} rows={adminRows} />;
}
