import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/pass_generator/", // ✅ Important
  plugins: [react()],
});
