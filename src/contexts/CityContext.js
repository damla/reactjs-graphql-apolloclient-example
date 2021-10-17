import { createContext, useState, useContext } from "react";
// import cities constant data which has id and name pairs
import { data } from "../utils/cities";
import { getRandom } from "../utils/helpers";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  // set all cities data
  const [cities, useCities] = useState(data.cities);

  // set selected data for initialization
  const [selectedCityId, setSelectedCityId] = useState(
    data.cities[getRandom(data.cities.length)].value
  );

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
