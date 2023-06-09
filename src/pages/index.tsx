import Head from "next/head";

import Cards from "@/components/Cards";
import Form from "@/components/Form/Form";

export default function Home() {
	return (
		<>
			<Head>
				<title>MTD</title>
				<meta name="description" content="Agência Método" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="w-full min-h-screen grid grid-cols-1 md:grid-cols-[1.5fr_2fr] overflow-hidden">
				<Cards />
				<Form />
			</main>
		</>
	);
}
