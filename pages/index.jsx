import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

import { AppBar } from "@/components/AppBar/AppBar";
import { Container } from "@/components/Container/Container";
import { Today } from "@/components/Today/Today";

export const getStaticProps = async () => {
  const response = await axios.get(
    "https://api.weatherapi.com/v1/current.json?key=4a06b0437031495ca6b20810233107&q=chicago"
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
  // const [weather, setWeather] = useState({});
  // const [current, setCurrent] = useState({});
  // const [currentCondition, setCurrentCondition] = useState({});

  // useEffect(() => {
  //   const currentWeather = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.weatherapi.com/v1/current.json?key=4a06b0437031495ca6b20810233107&q=chicago"
  //       );
  //       const data = await response.data;

  //       setWeather(data.location);
  //       setCurrent(data.current);
  //       setCurrentCondition(data.current.condition);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   currentWeather();
  // }, []);

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
