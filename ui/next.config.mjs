/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  // Proxy /chat requests to the backend server
  async rewrites() {
    return [
      {
        source: "/chat",
        destination: "https://loreal-backend.fly.dev/chat",
      },
    ];
  },
};

export default nextConfig;
