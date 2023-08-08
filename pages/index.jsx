import Head from "next/head";
import { AppBar } from "@/components/AppBar/AppBar";
import { Container } from "@/components/Container/Container";
import { Today } from "@/components/Today/Today";

export const Home = () => {
  return (
    <main>
      <Head>
        <title>Weather</title>
      </Head>
      <Container>
        <AppBar />
        <Today />
      </Container>
    </main>
  );
};

export default Home;
