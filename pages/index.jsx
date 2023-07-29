import Head from "next/head";
import { Home } from "@/components/Home/Home";

export default function Index() {
  return (
    <main>
      <Head>
        <title>Weather</title>
      </Head>
      <Home />
    </main>
  );
}
