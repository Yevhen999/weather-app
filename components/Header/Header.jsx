import { AppBar } from "../AppBar/AppBar";
import { UserMenu } from "../UserMenu/UserMenu";

export const Header = ({ weather }) => {
  return (
    <>
      <UserMenu weather={weather} />
    </>
  );
};
