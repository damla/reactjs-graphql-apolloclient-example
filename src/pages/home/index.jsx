import styles from "./styles.module.scss";
import Container from "../../components/container";
import Cities from "../../components/cities";
import Layout from "../../components/layout";
import WeatherCard from "../../components/weather-card";
import { useCities } from "../../contexts/CityContext";
import { getCurrentDay } from "../../utils/helpers";

export default function Home() {
  const { selectedCityId } = useCities();

  return (
    <Layout>
      <h1 className={styles.title}>{getCurrentDay()}</h1>
      <Container>
        <Cities />
        <WeatherCard selectedCityId={selectedCityId} />
      </Container>
    </Layout>
  );
}
