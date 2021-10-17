import React from "react";
import { KelvinToCelcius } from "../../utils/helpers";
import { useQuery } from "@apollo/client";
import { CITY_QUERY } from "./queries";

export default function WeatherCard({ selectedCityId }) {
  const { loading, error, data } = useQuery(CITY_QUERY, {
    variables: { id: selectedCityId },
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>{error.toString()}</p>;

  const {
    name,
    country,
    weather: {
      summary: { description, icon },
      temperature: { actual },
    },
  } = data.getCityById[0];

  return (
    <div>
      {name} {country} {description} {icon} {KelvinToCelcius(actual)}
    </div>
  );
}
