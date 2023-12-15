import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

import { AppBar } from "@/components/AppBar/AppBar";
import { Container } from "@/components/Container/Container";
import { Header } from "@/components/Header/Header";

const Forecast = () => {
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
        setCurrent(data.current);
      } catch (error) {
        console.log(error);
      }
    };
    currentWeather();
  }, []);
  console.log(weather);

  return (
    <main>
      <Head>
        <title>Weather</title>
      </Head>
      <Container>
        <AppBar weather={weather} />
      </Container>
    </main>
  );
};

export default Forecast;
