import { Container } from "@/components/Container/Container";
import { Header } from "@/components/Header/Header";
import Head from "next/head";

export default function Forecast() {
  return (
    <main>
      <Head>
        <title>Weather</title>
      </Head>
      <Container>
        <Header />
        <div>Forecast</div>
      </Container>
    </main>
  );
}
