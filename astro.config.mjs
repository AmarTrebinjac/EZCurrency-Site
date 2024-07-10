import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "EZ Currency",
      social: {
        github: "https://github.com/AmarTrebinjac/EZ-Currency-Api",
        twitter: "https://x.com/AmarTrebinjac",
      },
      sidebar: [
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
