import { BiMenu, BiDotsVerticalRounded } from "react-icons/bi";
import { Container } from "../Container/Container";

export const AppBar = () => {
  return (
    <Container>
      <div>
        <div>
          <BiMenu />
          <h1>Toronto, Canada</h1>
          <BiDotsVerticalRounded />
        </div>
        <nav>
          <ul>
            <li>Today</li>
            <li>Forecast</li>
            <li>Precipitation</li>
            <li>Raduis</li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};
