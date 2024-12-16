import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(
    react({
      fastRefresh: true, // Ensure Fast Refresh is enabled
    }),
  )],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
