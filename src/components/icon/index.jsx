import styles from "./styles.module.scss";

export default function Icon({ iconId }) {
  return (
    <img
      className={styles.elements}
      src={`http://openweathermap.org/img/wn/${iconId}.png`}
      alt="weather-icon"
    />
  );
}
