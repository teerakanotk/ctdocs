import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

export const metadata: Metadata = {
  title: {
    default: "CTDOCS",
    template: "%s | CTDOCS",
  },
  description: "CTDOCS is a documentation site built with Nextra and Next.js.",
};

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "thai"],
});

const navbar = (
  <Navbar
    logo={<b>CTDOCS</b>}
    // ... Your additional navbar options
  />
);
const footer = <Footer>© {new Date().getFullYear()}</Footer>;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body className={`${kanit.className} antialiased`}>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/teerakanotk/ctdocs/tree/main"
          footer={footer}
          // ... Your additional layout options
          sidebar={{ toggleButton: false, defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
