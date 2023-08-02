import { AppBar } from "../AppBar/AppBar";
import { UserMenu } from "../UserMenu/UserMenu";

export const Header = () => {
  return (
    <header>
      <UserMenu />
      <AppBar />
    </header>
  );
};
