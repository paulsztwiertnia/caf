"use client";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/ui/button";
import { hVariants } from "@/lib/variants";
import { motion } from "motion/react";
import { content } from "@/lib/content";

export function HeroBanner() {
  return (
    <section className="relative flex min-h-screen flex-col items-start justify-end overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={content.video.url} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="bold-container relative z-10 flex w-full flex-col items-start pb-[8%] pt-32 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className={cn(hVariants({ role: "displayHero" }), "max-w-5xl text-white px-2 md:px-0")}
        >
          Complete Home
          <br />
          Renovations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="mt-6 max-w-xl text-xl xl:text-2xl tracking-tight text-white/90 px-2 md:px-0"
        >
          Home renovation ideas done right — serving Toronto and the GTA.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="mt-10 flex flex-wrap gap-6 px-2 md:px-0"
        >
          <LinkButton
            href="/services"
            text="Our Services"
            alt="Our Services"
            variant="light"
            arrow
          />
          <LinkButton
            href="/contact"
            text="Contact Us"
            alt="Contact Us"
            variant="underline"
            arrow
            className="text-white [&_span]:border-(--color-link-hover)"
          />
        </motion.div>
      </div>
    </section>
  );
}
