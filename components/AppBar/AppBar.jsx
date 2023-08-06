import Link from "next/link";

export const AppBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Today</Link>
          </li>
          <li>
            <Link href="/forecast">Forecast</Link>
          </li>
          <li>Precipitation</li>
          <li>Radar Sun & Moon</li>
        </ul>
      </nav>
    </div>
  );
};
