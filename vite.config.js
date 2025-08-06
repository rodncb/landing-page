import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/landing-page/", // Alterado para corresponder ao nome do repositório
  server: {
    port: 3030,
  },
});
