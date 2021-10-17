import Container from "../../components/container";
import Cities from "../../components/cities";
import Layout from "../../components/layout";
import WeatherCard from "../../components/weather-card";
import { useCities } from "../../contexts/CityContext";

export default function Home() {
  const { selectedCityId } = useCities();

  return (
    <Layout>
      <Container>
        <Cities />
        <WeatherCard selectedCityId={selectedCityId} />
      </Container>
    </Layout>
  );
}
