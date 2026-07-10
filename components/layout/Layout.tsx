import Head from "next/head";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{`${title} — Shabakkat`}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
