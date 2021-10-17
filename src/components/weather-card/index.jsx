import React from "react";
import { useQuery } from "@apollo/client";
import { CITY_QUERY } from "./queries";

export default function WeatherCard({ cityParameter }) {
  const { loading, error, data } = useQuery(CITY_QUERY, {
    variables: { id: cityParameter.value },
  });

  if (loading) return <p>loading</p>;
  if (error) return <p>{error.toString()}</p>;

  const { name, country, weather } = data.getCityById[0];

  
  return <div>{name}</div>;
}
