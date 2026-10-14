/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local imagery only; no runtime optimizer dependency on host.
    unoptimized: true,
  },
};

export default nextConfig;
