import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "@/styles/globals.css";

export const metadata = {
  title: {
    default: "CTDOCS",
    template: "%s | CTDOCS",
  },
  description: "CTDOCS is a documentation site built with Nextra and Next.js.",
};

const navbar = <Navbar logo={<b>CTDOCS</b>} />;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body className="antialiased">
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/teerakanotk/ctdocs/tree/main"
          sidebar={{ toggleButton: false, defaultMenuCollapseLevel: 1 }}
        >
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
