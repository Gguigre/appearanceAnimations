const WEATHER_TYPES = ["cloud", "rain", "snow", "storm", "sun", "sunny"];

export const getRandomWeather = () => {
  const maxTemperature = 10 + Math.floor(20 * Math.random());
  return {
    maxTemperature,
    minTemperature: Math.floor(maxTemperature * (1 - Math.random())),
    weatherType: WEATHER_TYPES[Math.floor(Math.random() * WEATHER_TYPES.length)]
  };
};
