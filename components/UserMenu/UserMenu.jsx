import { BiMenu, BiDotsVerticalRounded } from "react-icons/bi";
import styles from "./UserMenu.module.css";
import { CurrentLocation } from "../CurrentLocation/CurrentLocation";

export const UserMenu = ({ weather }) => {
  return (
    <div className={styles.wrapper}>
      <BiMenu size={24} color="#fff" />
      <CurrentLocation weather={weather} />
      <BiDotsVerticalRounded size={24} color="#fff" />
    </div>
  );
};
