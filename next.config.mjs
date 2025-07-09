import nextra from "nextra";

const withNextra = nextra({
  // ... Add Nextra-specific options here
  search: { codeblocks: false },
  defaultShowCopyCode: true,
  contentDirBasePath: "/docs",
});

export default withNextra({
  // ... Add regular Next.js options here
  redirects: async () => [
    {
      source: "/",
      destination: "/docs",
      permanent: true,
    },
  ],
});
