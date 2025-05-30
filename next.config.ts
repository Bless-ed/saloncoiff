import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   eslint: {
    ignoreDuringBuilds: true, // ⛔ Ignorer les erreurs ESLint au build (temporairement)
  },
  /* config options here */
};

export default nextConfig;
