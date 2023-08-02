import { BiMenu, BiDotsVerticalRounded } from "react-icons/bi";
import styles from "./UserMenu.module.css";

export const UserMenu = () => {
  return (
    <div className={styles.wrapper}>
      <BiMenu size={24} color="#fff" />
      <h1 className={styles.title}>Toronto, Canada</h1>
      <BiDotsVerticalRounded size={24} color="#fff" />
    </div>
  );
};
