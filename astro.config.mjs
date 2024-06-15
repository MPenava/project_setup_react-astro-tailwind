import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://mpenava.github.io",
  base: "project_setup_react-astro-tailwind",
  integrations: [react(), tailwind()],
});
