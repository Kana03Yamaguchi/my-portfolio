import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 外部APIの画像を使用するための設定
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

export default nextConfig;
