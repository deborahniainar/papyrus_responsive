import { ManagementPage } from "@/components/workspace/management-page";
export default function SupportCasesPage() { return <ManagementPage title="Dossiers clients" description="Demandes ouvertes et incidents de compte." columns={["Dossier","Client","Motif","Statut"]} rows={[["PAP-48219","Lucie Morel","Compte suspendu","En cours"],["PAP-48204","Marc Dumas","Paiement","Nouveau"]]} />; }
