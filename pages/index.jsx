import { Container } from "@/components/Container/Container";
import { Header } from "@/components/Header/Header";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Weather</title>
      </Head>
      <Container>
        <Header />
      </Container>
    </main>
  );
}
