import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  // ... Add Nextra-specific options here
  defaultShowCopyCode: true,
  search: { codeblocks: false },
});

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.tsx",
    },
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs",
        permanent: true,
      },
    ];
  },
};

export default withNextra(nextConfig);
