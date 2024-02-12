"use client";
import { Button } from "@muse/ui";
import * as Icons from "@muse/ui/icons";
import { motion } from "framer-motion";
import InfoPill from "./info-pill";

export default function HeroSection(): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <InfoPill />
      <motion.h1
        className="text-balance bg-gradient-to-br from-white from-25% to-white/80 to-75% bg-clip-text text-center text-6xl font-bold leading-tight text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Effortless Full-Stack Development with Muse
      </motion.h1>
      <motion.div
        className="text-grey/60 text-center text-xl font-light"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
        <p>Effortless collaboration, seamless Vercel deployment.</p>
        <p>Everything you need to code faster and smarter.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -7 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      >
        <Button className="text-md mt-8 py-6 font-normal tracking-wide">
          Get started
          <Icons.ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
      <div className="bg-bg2 border-indigoLight mt-8 h-[750px] w-full rounded-lg border" />
    </div>
  );
}
