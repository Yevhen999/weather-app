import { useEffect, useState } from "react";
import Image from "next/image";

import homePhoto from "../../public/home.png";
import styles from "./Today.module.css";
import axios from "axios";

export const Today = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const currentWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/current.json?key=4a06b0437031495ca6b20810233107&q=M4L1V2"
        );
        const data = await response.data;
        // console.log(data.location);
        setWeather(data.location);
      } catch (error) {
        console.log(error);
      }
    };
    currentWeather();
  }, []);
  console.log(weather);

  const { name, country } = weather;

  return (
    <div>
      <h2>{country}</h2>
      <p>{name}</p>
    </div>
  );
};

