import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// Check if the environment is development or production
const isDevelopment = process.env.NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  site: "https://mpenava.github.io",
  base: isDevelopment ? "" : "project_setup_react-astro-tailwind",
  integrations: [react(), tailwind()],
});
