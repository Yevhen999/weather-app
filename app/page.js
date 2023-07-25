import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </div>
    </main>
  );
}
