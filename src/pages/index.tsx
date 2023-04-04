import Head from "next/head";

import Cards from "@/components/Cards";

export default function Home() {
  return (
    <>
      <Head>
        <title>MTD</title>
        <meta name="description" content="Agência Método" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full min-h-screen grid grid-cols-[0.5fr_2fr] ">
        <Cards />
        <section></section>
      </main>
    </>
  );
}
