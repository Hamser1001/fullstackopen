import { useEffect, useState } from "react";
import axios from "axios";

const WeatherComponent = ({ city }) => {
  const [temp, setTemp] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (!city) return;

    console.log("fetching weather data...........");
    console.log("the city is", city);

    const fetchData = async () => {
      const key = import.meta.env.VITE_WEATHER_API_KEY;

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`,
        );

        console.log("the data city", response.data);
        console.log(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`,
        );
        setTemp(response.data.main.temp);
        setWind(response.data.wind.speed);
        setIcon(response.data.weather[0].icon);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [city]);

  return (
    <>
      <h2>Weather in {city}</h2>
      {temp && <p>Temprature {temp} Celsius</p>}
      {icon && (
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />
      )}
      {wind && <p>Wind {wind} m/s</p>}
    </>
  );
};

export default WeatherComponent;
