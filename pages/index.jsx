import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

import { AppBar } from "@/components/AppBar/AppBar";
import { Container } from "@/components/Container/Container";
import { Today } from "@/components/Today/Today";

const Home = () => {
  const [weather, setWeather] = useState({});
  const [current, setCurrent] = useState({});

  useEffect(() => {
    const currentWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/current.json?key=4a06b0437031495ca6b20810233107&q=chicago"
        );
        const data = await response.data;
        // console.log(data);
        setWeather(data.location);
        setCurrent(data.current.condition);
      } catch (error) {
        console.log(error);
      }
    };
    currentWeather();
  }, []);
  // console.log(weather);
  // console.log(weather.location);
  // console.log(current.text);

  return (
    <main>
      <Head>
        <title>Weather</title>
      </Head>
      <Container>
        <AppBar weather={weather} />
        <Today weather={weather} current={current} />
      </Container>
    </main>
  );
};

export default Home;
