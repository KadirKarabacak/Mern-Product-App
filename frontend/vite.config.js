import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // It mean when we visit /api it will prefixed with the target which is http://localhost:5000
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:5000",
            },
        },
    },
});
