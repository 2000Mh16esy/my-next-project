import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const name = "世界";
  return (
    <div>
      <h1 className={styles.title}>テクノロジの力で{name}を変える</h1>
      <p className={styles.description}>
        私たちは市場をリードしているゴローバルテックカンパニーです。
      </p>
    </div>
  );
}
