"use client";
import { motion } from "framer-motion";

export default function RealtimeFeature() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.h1
        className="container -z-10 text-balance text-center text-6xl font-bold leading-tight
      "
        initial={{ y: 120 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Realtime Next.js Development:
        <br />
        Muse powers effortless
        <br />
        team workflow
      </motion.h1>
      <div className="container flex flex-col items-center">
        <div className="bg-bg2 border-indigoLight mt-20 h-[286px] w-full rounded-lg border" />
        <h2 className="mt-10 max-w-3xl text-pretty text-center text-3xl">
          Break down communication barriers. <br /> Collaborate in real-time
          with other developers <br />
          directly within Muse.
        </h2>
      </div>
      <div className="border-gradient my-16 h-[1px] w-full" />
      <div className="container flex flex-col gap-5">
        <ul className="grid grid-cols-3 gap-5">
          <li className="flex w-fit">
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">
                Real-time code editing:
              </span>{" "}
              Make simultaneous changes and see updates instantly.
            </p>
          </li>
          <li className="flex w-fit">
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">Shared workspaces:</span>{" "}
              Invite team members and work on projects together.
            </p>
          </li>
          <li className="flex w-fit">
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">
                Code reviews and comments:
              </span>{" "}
              Provide feedback and suggestions within the code editor.
            </p>
          </li>
        </ul>
        <ul className="grid grid-cols-6">
          <li className="col-span-2 col-start-2 flex w-fit">
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">
                Project management tools:
              </span>{" "}
              Organize tasks, track progress, and stay on top of deadlines.
            </p>
          </li>
          <li className="col-span-2 col-start-4 flex w-fit">
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">Git integration:</span>{" "}
              Push and pull code changes seamlessly within the collaborative
              environment.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
