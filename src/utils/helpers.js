// To get current day name
export const getCurrentDay = () => {
  let today = new Date();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekdays[today.getDay()];
};

// To split only name of province
export const splitName = (cityName) => cityName.split(" ")[0];

// To convert incoming weather data from Kelvin to Celcius
export const kelvinToCelcius = (kelvin) =>
  parseFloat(kelvin - 273.15).toFixed(2);

// created to select random index from an array
export const getRandom = (val) => Math.floor(Math.random() * val);
