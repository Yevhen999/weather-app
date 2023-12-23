import { IoPartlySunny } from "react-icons/io5";
import { WiHumidity, WiNightCloudyWindy, WiSunset } from "react-icons/wi";
import Image from "next/image";

import partlySunny from "../../public/parlty-sunny.svg";
import partlyRainy from "../../public/partly-rainy.svg";

import styles from "./DetailedIndicators.module.css";

export const DetailedIndicators = ({ current, currentCondition }) => {
  const icon = currentCondition.icon;
  7;

  const text = currentCondition.text;
  console.log(text);

  // switch (text) {
  //   case "Mist":
  //     return <Mist />;

  //   default:
  //     return console.log("first");
  // }

  // const USER_ROLE_ADMIN = "admin";
  // const USER_ROLE_USER = "user";

  // function Dashboard(props) {
  //   const { userRole } = props;

  //   switch (userRole) {
  //     case USER_ROLE_ADMIN:
  //       return <AdminDashboard />;
  //     case USER_ROLE_USER:
  //       return <UserDashboard />;
  //     default:
  //       return <div>Error: Invalid User Role</div>;
  //   }
  // }

  console.log(currentCondition);

  // console.log(icon);
  return (
    <div className={styles.detailedIndicators}>
      <ul className={styles.indicatorsList}>
        <li className={styles.indicatorsItem}>
          <Image
            src={partlySunny}
            alt="parlty-sunny"
            width={20}
            height={20}
            className={styles.indicatorsIcon}
          />
          {/* <IoPartlySunny
            size={20}
            color="#FFC100"
            className={styles.indicatorsIcon}
          /> */}
          <p>
            Precipitation: <span>{current.precip_mm} mm</span>
          </p>
        </li>
        <li className={styles.indicatorsItem}>
          <WiHumidity
            size={20}
            color="#FFC100"
            className={styles.indicatorsIcon}
          />
          <p>
            Humidity: <span>{current.humidity}%</span>
          </p>
        </li>
        <li className={styles.indicatorsItem}>
          <WiNightCloudyWindy
            size={20}
            color="#FFC100"
            className={styles.indicatorsIcon}
          />{" "}
          <p>
            Wind: <span>{current.wind_kph} km/h</span>
          </p>
        </li>
        <li className={styles.indicatorsItem}>
          {/* {conditionText} */}
          {text === "Overcast" && (
            <Image
              src={partlySunny}
              alt="parlty-sunny"
              width={20}
              height={20}
              className={styles.indicatorsIcon}
            />
            /* <WiSunset
              size={20}
              color="#FFC100"
              className={styles.indicatorsIcon}
            /> */
          )}
          {text === "Mist" && (
            <Image
              src={partlyRainy}
              alt="parlty-rainy"
              width={20}
              height={20}
              className={styles.indicatorsIcon}
            />
          )}
          <p>{text}</p>
        </li>
      </ul>
    </div>
  );
};
