import axios from "axios";
import Head from "next/head";

import { AppBar } from "@/components/AppBar/AppBar";
import { Container } from "@/components/Container/Container";
import { Today } from "@/components/Today/Today";


export const getStaticProps = async () => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=chicago`
  );

  const data = await response.data;

  if (!data) {
    return { notFound: true };
  }

  const weather = await data.location;
  const current = await data.current;
  const currentCondition = await data.current.condition;

  return {
    props: {
      weather,
      current,
      currentCondition,
    },
  };
};

const Home = ({ weather, current, currentCondition }) => {
  return (
    <main>
      <Head>
        <title>Weather</title>
      </Head>
      <Container>
        <AppBar weather={weather} />
        <Today
          weather={weather}
          current={current}
          currentCondition={currentCondition}
        />
      </Container>
    </main>
  );
};

export default Home;
