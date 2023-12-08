/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "human.biodigital.com" }],
  },
};

module.exports = nextConfig;
