import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "7CzphteDn95cERg7nN7EAF",
      token:
        "A5wQiGDsOydP108OyrpzprfEAPORSBOjSn28mmIg7lYoCafNHa05kze1qvlvneHooAJr2qkatyirwzMa6hEQw",
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
