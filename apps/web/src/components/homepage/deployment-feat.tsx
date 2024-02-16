"use client";
import { motion } from "framer-motion";

export default function DeploymentFeature(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.h1
        className="container -z-10 text-balance text-center text-6xl font-bold leading-tight
      "
        initial={{ y: 120 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Effortless Next.js Deployments:
        <br />
        Get Your App Live with Muse in
        <br />
        Minutes
      </motion.h1>
      <div className="container flex flex-col items-center">
        <div className="bg-bg2 border-indigoLight mt-20 h-[286px] w-full rounded-lg border" />
        <h2 className="mt-10 max-w-3xl text-pretty text-center text-3xl">
          Connect directly to popular platforms like <br />
          Vercel for seamless deployments.
        </h2>
      </div>
      <div className="border-gradient my-16 h-[1px] w-full" />
      <div className="container flex flex-col gap-5">
        <ul className="grid grid-cols-6">
          <li className="col-span-2 col-start-2 flex w-fit">
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">
                One-click deployment:
              </span>{" "}
              Deploy your app to Vercel directly from Muse with a single click.
            </p>
          </li>
          <li className="col-span-2 col-start-4 flex w-fit">
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">
                Custom domain support:
              </span>{" "}
              Connect your own domain for a professional experience.
            </p>
          </li>
        </ul>
        <ul className="grid grid-cols-6">
          <li className="col-span-2 col-start-2 flex w-fit">
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">
                Real-time deployment status:
              </span>{" "}
              Track the progress of your deployments in real-time.
            </p>
          </li>
          <li className="col-span-2 col-start-4 flex w-fit">
            <p className="text-grey/70 font-light">
              <span className="font-medium text-white">
                Environment management:
              </span>{" "}
              Easily switch between development, and production environments.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
