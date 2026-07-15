import { PremiumAudioPlayer } from "@/components/audio/premium-audio-player";
import { PlayerBar } from "@/components/audio/player-bar";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";

export default function PlayerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="lg:pl-64">
        <TopNav />
        <PremiumAudioPlayer />
        <PlayerBar />
      </div>
    </div>
  );
}
