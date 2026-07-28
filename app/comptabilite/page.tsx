import { WorkspaceShell } from "@/components/workspace/workspace-shell";
import { publisherMetrics, authorRows } from "@/components/workspace/workspace-data";
export default function AccountingPage() { return <WorkspaceShell eyebrow="Finance" title="Comptabilité" description="Contrôlez les transactions, remboursements et reversements aux créateurs." metrics={publisherMetrics} rows={authorRows} />; }
