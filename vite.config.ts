import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// RaedElNABOULSI.github.io is a user/organization GitHub Pages site,
// so it is always served from the domain root regardless of branch.
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
