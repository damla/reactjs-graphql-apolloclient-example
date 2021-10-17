import { createContext, useState, useContext } from "react";
import { data } from "../utils/cities";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  // set all cities data
  const [cities, useCities] = useState(data.cities);

  // set selected data for initialization
  const [selectedCityId, setSelectedCityId] = useState("738647");

  const values = {
    cities,
    useCities,
    selectedCityId,
    setSelectedCityId,
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

// created custom hook
export const useCities = () => useContext(CityContext);
