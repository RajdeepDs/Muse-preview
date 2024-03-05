// tailwind config is required for editor support

import sharedConfig from "@muse/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx", "./src/components/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
