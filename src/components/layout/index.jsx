import styles from "./styles.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.footer}>
        Made with ❤️ by&nbsp;
        <a
          href="https://github.com/damla"
          rel="noopener noreferrer"
          target="_blank"
        >
          damla
        </a>
      </div>
    </div>
  );
}
