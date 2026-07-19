import "@/styles/globals.css";
import "@/components/LogoLoop.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Oswald, Inter } from "next/font/google";

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${oswald.variable} ${inter.variable} font-body`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
