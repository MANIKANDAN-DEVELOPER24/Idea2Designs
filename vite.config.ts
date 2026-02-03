import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Idea2Designs/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
