/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
  transpilePackages: ["next-mdx-remote"],
  async redirects() {
    return [
      {
        source: "/services/academic-research-partnerships",
        destination: "/blogs",
        permanent: true,
      },
      { source: "/agentic-ai", destination: "/digital-ai", permanent: true },
    ];
  },
};

export default nextConfig;
