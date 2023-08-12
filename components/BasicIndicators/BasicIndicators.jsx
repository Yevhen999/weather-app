import Image from "next/image";
import sunny from "../../public/sunny.svg";

export const BasicIndicators = ({ current }) => {
  console.log(current);
  return (
    <div>
      <div>
        <Image src={sunny} alt="sunny" />
        <p>{current.temp_c}&#176; | Feels like ...</p>
      </div>
      <div>
        <span>{current.temp_c}&#176;</span>
        <p>Partly cloudy</p>
        <p>Wind</p>
      </div>
    </div>
  );
};
