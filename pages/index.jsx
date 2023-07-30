import Head from "next/head";
import { Today } from "@/components/Today/Today";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Weather</title>
      </Head>
      <Today />
    </main>
  );
}
