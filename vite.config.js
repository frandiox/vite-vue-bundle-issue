import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  ssr: {
    target: "webworker",
    noExternal: ["vue", "@vue/server-renderer"],
  },
});
