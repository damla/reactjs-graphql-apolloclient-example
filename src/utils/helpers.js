export const spliceName = (cityName) => cityName.split(" ")[0];

export const kelvinToCelcius = (kelvin) =>
  parseFloat(kelvin - 273.15).toFixed(2);
