import Image from "next/image";
import {
  FaPlay,
  FaBackwardStep,
  FaForwardStep,
  FaShuffle,
  FaRepeat,
  FaVolumeHigh,
  FaListUl
} from "react-icons/fa6";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export function PlayerBar() {
  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full border-t border-white/5 bg-[#0a0a0a]/90 px-3 py-3 backdrop-blur-xl sm:px-4 lg:left-64 lg:w-[calc(100%-16rem)] lg:px-8 lg:py-4">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto] items-center gap-3 lg:flex lg:justify-between lg:gap-8">
        <div className="flex min-w-0 items-center gap-3 lg:w-[240px] lg:gap-4">
          <div className="relative size-11 shrink-0 overflow-hidden rounded-lg bg-white/5 shadow-2xl sm:size-14">
            <Image src="/demos/papyrus/assets/images/books/cover-chute-geants.png" alt="Couverture de L'Alchimiste" fill sizes="56px" className="object-cover" />
          </div>
          <div className="min-w-0">
            <h4 className="truncate text-sm font-bold text-white">L&apos;Alchimiste</h4>
            <p className="truncate text-xs text-white/50">Paulo Coelho</p>
          </div>
        </div>

        <div className="contents lg:flex lg:flex-1 lg:flex-col lg:items-center lg:gap-3">
          <div className="flex items-center justify-end gap-1 sm:gap-3 lg:justify-center lg:gap-8">
            <Button variant="ghost" size="icon" className="hidden text-white/40 hover:text-white sm:inline-flex">
              <FaShuffle className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
              <FaBackwardStep className="size-4 sm:size-5" />
            </Button>
            <Button className="size-10 rounded-full bg-primary text-black shadow-[0_0_20px_rgba(255,138,42,0.3)] hover:bg-primary/90 sm:size-12">
              <FaPlay className="size-4 sm:size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
              <FaForwardStep className="size-4 sm:size-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden text-white/40 hover:text-white sm:inline-flex">
              <FaRepeat className="size-4" />
            </Button>
          </div>

          <div className="col-span-2 flex w-full items-center gap-2 pt-1 lg:max-w-2xl lg:gap-4 lg:pt-0">
            <span className="text-[10px] tabular-nums text-white/40">12:45</span>
            <Slider defaultValue={[44]} max={100} step={1} className="flex-1" />
            <span className="text-[10px] tabular-nums text-white/40">25:30</span>
          </div>
        </div>

        <div className="hidden w-[240px] items-center justify-end gap-6 lg:flex">
          <Button variant="ghost" size="icon" className="text-white/40 hover:text-white">
            <FaListUl className="size-4" />
          </Button>
          <div className="flex w-32 items-center gap-3">
            <FaVolumeHigh className="size-4 text-white/40" />
            <Slider defaultValue={[70]} max={100} step={1} className="flex-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
