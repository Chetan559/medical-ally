import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // base: "/mediacal-ally/", // your repo name
  plugins: [react()],
  resolve: {
    alias: {
      "@emotion/react": path.resolve(__dirname, "node_modules/@emotion/react"),
      "@emotion/styled": path.resolve(
        __dirname,
        "node_modules/@emotion/styled"
      ),
    },
  },
});
