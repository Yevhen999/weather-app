import { AppBar } from "@/components/AppBar/AppBar";
import { Container } from "@/components/Container/Container";
import { Header } from "@/components/Header/Header";
import Head from "next/head";

export const Forecast = () => {
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
};

export default Forecast;
