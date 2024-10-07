import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/

const isDev = process.env.NODE_ENV === "development";
export default defineConfig({
  resolve: {
    alias: {
     "@lib": resolve(__dirname, "./lib"),
      // do this in dev mode to avoid the need to build the package
   //   ...(isDev && { "react-16-app": resolve(__dirname, "../react-16/lib") }), // Use source in dev mode
    },
  },
  plugins: [
    react(),
    tsconfigPaths(), // to use baseUrl and paths from tsconfig.json in test files
    dts({ include: ["lib"], copyDtsFiles: true }),
  ],
});

