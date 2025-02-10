import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      exclude: path.resolve(__dirname, "src/app/icon.svg"),
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
