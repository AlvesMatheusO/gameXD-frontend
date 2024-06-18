import styles from "../../styles/Home.module.css";
import { Header } from "../components/header/header";

export default function Home() {
  return (
    <div className={styles.container}>
          <Header />
          <div className={styles.content}>
            <div className={styles.wallpaper}>
        </div>
      </div>
    </div>
  );
}
