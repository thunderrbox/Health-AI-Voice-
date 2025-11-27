"use client";

import { motion } from "motion/react";
import { FeaturesBentoGrid } from "./_componenets/FeaturesBetoGrid";
import { SpotlightCard } from "./_componenets/SpotlightCard";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // ✅ Correct Link import

export default function HeroSectionOne() {
  return (
    <div className="relative my-10 flex flex-col items-center justify-center overflow-visible">
      <Navbar />

      {/* Decorative Borders */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      {/* Content */}
      <div className="px-4 py-10 md:py-20">
        {/* Heading */}
        <h1 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"⚕️ Revolutionize Healthcare Delivery with AI-Driven Medical Voice Agents 🩺"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative z-20 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Deliver 24/7 intelligent medical support with conversational AI—triage
          symptoms, book appointments, and offer empathetic, voice-first care.
          Always-on medical intelligence that triages, books, and cares—
          instantly and empathetically.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-50 m-8 flex flex-wrap items-center justify-center overflow-visible"
        >
          <Link href="/sign-in">
            <button className="px-8 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-all dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Explore Now
            </button>
          </Link>
        </motion.div>

        {/* Preview Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src="https://assets.aceternity.com/pro/aceternity-landing.webp"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Additional Feature Section */}
      <FeaturesBentoGrid />
    </div>
  );
}

// ------------------ NAVBAR ------------------

const Navbar = () => {
  const { user } = useUser();
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">Aceternity UI</h1>
      </div>

      {!user ? (
        <Link href="/sign-in">
          <Button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Login
          </Button>
        </Link>
      ) : (
        <div className="flex gap-5 items-center">
          <UserButton />
          <Button>Dashboard</Button>
        </div>
      )}
    </nav>
  );
};
