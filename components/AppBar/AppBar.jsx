import { BiMenu } from "react-icons/bi";

export const AppBar = () => {
  return (
    <div>
      <BiMenu />
      <nav>
        <ul>
          <li>Today</li>
          <li>Forecast</li>
          <li>Precipitation</li>
          <li>Raduis</li>
        </ul>
      </nav>
    </div>
  );
};
