import Container from "../../components/container";
import Cities from "../../components/cities";
import Layout from "../../components/layout";
import WeatherCard from "../../components/weather-card";
import { data } from "../../utils/cities.js";

export default function Home() {
  // console.log(data.cities[0]);
  return (
    <Layout>
      <Container>
        <Cities />
        <WeatherCard cityParameter={data.cities[0]} />
      </Container>
    </Layout>
  );
}
