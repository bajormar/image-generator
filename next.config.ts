import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    serverExternalPackages: ['puppeteer-core', '@sparticuz/chromium-min'],
    eslint: {ignoreDuringBuilds: true},
    typescript: {ignoreBuildErrors: true}
};

export default nextConfig;
