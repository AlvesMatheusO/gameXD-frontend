import styles from "./styles.module.scss";
import Link from "next/link";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Link href="/feed">
          <h1>GameXD</h1>
        </Link>
      </div>

      <div className={styles.headerContent}>
        <div className={styles.menuNav}>
          <Link href="/Login">Entrar</Link>
          <Link href="/Authentication">Cadastre-se</Link>
          <Link href="/News">News</Link>
          <Link href="/Games">Games</Link>
          <Link href="/Users">Users</Link>
        </div>
        <div className={styles.searchContainer}>
          <input type="text" />
          <SearchRoundedIcon color="action" fontSize="small"/>
        </div>
      </div>
    </header>
  );
}
