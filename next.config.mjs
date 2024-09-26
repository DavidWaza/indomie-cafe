/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // loader: "custom",
    unoptimized: true,
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
