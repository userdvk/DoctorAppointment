import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "DoctorApp",
        short_name: "Doctor Appointmets ",
        theme_color: "#000000",
        icons: [],
      },
    }),
  ],
});
