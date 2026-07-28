import { WorkspaceShell } from "@/components/workspace/workspace-shell";
import { adminMetrics, adminRows } from "@/components/workspace/workspace-data";
export default function SupportPage() { return <WorkspaceShell eyebrow="Relation utilisateurs" title="Centre support" description="Suivez les demandes, les comptes suspendus et les dossiers prioritaires." metrics={adminMetrics} rows={adminRows} />; }
