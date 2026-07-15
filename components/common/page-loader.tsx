"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <motion.div
      key={`${pathname}?${searchParams.toString()}`}
      initial={{ scaleX: 0, opacity: 1, originX: 0 }}
      animate={{ scaleX: 1, opacity: [1, 1, 0] }}
      transition={{ duration: 0.8, ease: "circOut", times: [0, 0.75, 1] }}
      className="fixed left-0 top-0 z-[100] h-1 w-full bg-gradient-to-r from-primary to-[#ffa14d] shadow-[0_0_10px_rgba(255,138,42,0.5)]"
    />
  );
}
