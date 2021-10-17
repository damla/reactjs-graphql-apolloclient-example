import React from "react";
import { useQuery } from "@apollo/client";
import { CITY_QUERY } from "./queries";

export default function WeatherCard({ selectedCityId }) {
  const { loading, error, data } = useQuery(CITY_QUERY, {
    variables: { id: selectedCityId },
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>{error.toString()}</p>;

  const { name, country, weather } = data.getCityById[0];

  return (
    <div>
      {name} {country} {weather.summary.description}
    </div>
  );
}
