import styles from "./styles.module.scss";

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
