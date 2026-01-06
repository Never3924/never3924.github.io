import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    /* config options here */

    async rewrites() {
        return [
            {
                source: "/games/4x4LifeGame/",
                destination: "/html/4x4LifeGame/index.html",
            },
        ];
    },
};

export default nextConfig;
