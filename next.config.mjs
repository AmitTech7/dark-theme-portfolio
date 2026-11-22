/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: '/hire/full-stack-developer', destination: '/hire', permanent: true }];
  },
};

export default nextConfig;
