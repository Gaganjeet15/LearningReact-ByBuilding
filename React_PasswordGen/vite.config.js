import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/pass-gen/", // ✅ Important
  plugins: [react()],
});
