import { AppBar } from "@/components/AppBar/AppBar";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Weather</title>
      </Head>
      <AppBar />
    </main>
  );
}
