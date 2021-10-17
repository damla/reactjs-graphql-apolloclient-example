import React from "react";
import { useQuery } from "@apollo/client";
import { CITY_QUERY } from "./queries";

export default function WeatherCard({ cityParameter }) {
  const { loading, error, data } = useQuery(CITY_QUERY, {
    variables: { name: cityParameter.name },
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  const { name, country, weather } = data.getCityByName;

  return <div>{name}</div>;
}
