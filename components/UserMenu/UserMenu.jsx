import { BiMenu, BiDotsVerticalRounded } from "react-icons/bi";
import styles from "./UserMenu.module.css";
import { Location } from "../Location/Location";

export const UserMenu = ({ weather }) => {
  return (
    <div className={styles.wrapper}>
      <BiMenu size={24} color="#fff" />
      <Location weather={weather} />
      <BiDotsVerticalRounded size={24} color="#fff" />
    </div>
  );
};
