import { WorkspaceShell } from "@/components/workspace/workspace-shell";
import { adminMetrics, adminRows } from "@/components/workspace/workspace-data";
export default function ModerationPage() { return <WorkspaceShell eyebrow="Qualité et conformité" title="Centre de modération" description="Analysez les contenus signalés et assurez la qualité du catalogue." metrics={adminMetrics} rows={adminRows} />; }
