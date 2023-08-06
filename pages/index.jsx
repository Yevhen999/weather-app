import { AppBar } from "@/components/AppBar/AppBar";
import { Container } from "@/components/Container/Container";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Weather</title>
      </Head>
      <Container>
        <AppBar />
      </Container>
    </main>
  );
}
