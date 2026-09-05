/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allows you to swap in remote painting photos later (e.g. from a CMS
    // or cloud storage) without extra config. Local files in /public work
    // automatically.
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

module.exports = nextConfig;
