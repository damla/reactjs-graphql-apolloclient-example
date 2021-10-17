import styles from "./styles.module.scss";
import Icon from "../icon/index";
import { splitName, upperCase, kelvinToCelcius } from "../../utils/helpers";
import { useQuery } from "@apollo/client";
import { CITY_QUERY } from "./queries";
import spinner from "../../assets/spinner.gif";

export default function WeatherCard({ selectedCityId }) {
  const { loading, error, data } = useQuery(CITY_QUERY, {
    variables: { id: selectedCityId },
  });

  if (loading)
    return (
      <div className={styles.spinner__container}>
        <img src={spinner} alt="spinner-gif" width="25" />
      </div>
    );
  if (error) return <p>{error.toString()}</p>;

  const {
    name,
    weather: {
      summary: { description, icon },
      temperature: { actual },
    },
  } = data.getCityById[0];

  return (
    <div className={styles.container}>
      <Icon iconId={icon} />
      <h4>{splitName(name)}</h4>
      <h4>{upperCase(description)}</h4>
      <h4>{kelvinToCelcius(actual)}&#8451;</h4>
    </div>
  );
}
