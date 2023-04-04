import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  weight: ["500", "400"],
  subsets: ["latin"],
  variable: "--font-space",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${space.variable} font-space`}>
      <Component {...pageProps} />
    </main>
  );
}
