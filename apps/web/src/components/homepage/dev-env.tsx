"use client";
import { motion } from "framer-motion";

export default function DevelopmentEnvironment(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.h1
        className="-z-10 text-balance text-center text-6xl font-bold leading-tight
      "
        initial={{ y: 120 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Muse: Your effortless Next.js development environment
      </motion.h1>
      {/*TODO - Modify LampHeading according to our needs*/}
      {/* <LampHeading /> */}
      <div className="bg-bg2 border-indigoLight mt-20 h-[286px] w-full rounded-lg border" />
      <h2 className="mt-10 max-w-3xl text-center text-3xl">
        Boost your Next.js development workflow with Muse's intuitive and
        feature-rich environment.
      </h2>
      <div className="my-16 h-[0.5px] w-full bg-purple-400" />
      <div className="mx-auto flex justify-center">
        <ul className="grid grid-cols-3 gap-5">
          <li className="flex w-fit">
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">Code Editor:</span> Write
              and edit Next.js code with a smooth, intuitive experience.
            </p>
          </li>
          <li>
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">
                Syntax Highlighting:
              </span>{" "}
              Understand Your Next.js Code with Muse's Intelligent Highlighting.
            </p>
          </li>
          <li>
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">Linting:</span> Get
              real-time feedback on potential issues, improving code quality.
            </p>
          </li>
          <li>
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">Autocompletion:</span>{" "}
              Intelligent suggestions help you write code accurately and
              efficiently.
            </p>
          </li>
          <li>
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">Debugging:</span>{" "}
              Pinpoint bugs quickly with powerful debugging tools.
            </p>
          </li>
          <li>
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">Terminal Access:</span>{" "}
              Access the power of the terminal directly from your IDE.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
