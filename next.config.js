/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "app/variables.scss";`,
  },
};

module.exports = nextConfig;
