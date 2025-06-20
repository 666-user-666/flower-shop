/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"], // Добавьте домен Render после деплоя
    formats: ["image/webp"],
  },
  swcMinify: true,
};

export default nextConfig;