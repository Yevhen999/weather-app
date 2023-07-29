import Image from "next/image";
import homePhoto from "../../public/home.png";

export const Home = () => {
  return (
    <div>
      <Image src={homePhoto} alt="home-photo" />
      <h1>Weather</h1>
      <p>Forecast</p>
    </div>
  );
};
