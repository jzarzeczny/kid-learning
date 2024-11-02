/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  headers: async () => [
    {
      // list more extensions here if needed; these are all the resources in the `public` folder including the subfolders
      source: "/:all*(svg|jpg|png)",
      locale: false,
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, stale-while-revalidate",
        },
      ],
    },
  ],
};

module.exports = nextConfig;
