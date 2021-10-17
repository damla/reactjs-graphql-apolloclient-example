import React from "react";
import { spliceName, kelvinToCelcius } from "../../utils/helpers";
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
    weather: {
      summary: { description, icon },
      temperature: { actual },
    },
  } = data.getCityById[0];

  return (
    <div>
      {spliceName(name)} | {description} | {icon} | {kelvinToCelcius(actual)}
    </div>
  );
}
