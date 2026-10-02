import { useEffect, useState } from "react";
import axios from "axios";

const CountryInfo = ({ country }) => {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [capitals, setCapitals] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    if (!country) {
      return;
    }
    console.log("component effect run");

    const fetchCountryDetails = async () => {
      const searchedCountry = country.trim().toLowerCase();
      try {
        const response = await axios.get(
          `https://studies.cs.helsinki.fi/restcountries/api/name/${searchedCountry}`,
        );
        setName(response.data?.name?.common);
        setArea(response.data?.area);
        setCapitals(Object.values(response.data?.capital));
        setLanguages(Object.values(response.data?.languages));
        setFlag(response.data?.flags?.png);
      } catch (err) {}
    };

    fetchCountryDetails();
  }, [country]);

  return (
    <>
      <h2>{name}</h2>

      <div>Capital {capitals[0]}</div>
      <p>Area {area}</p>
      <h3>Languages</h3>
      <ul>
        {languages.map((language, index) => {
          return <li key={index}>{language}</li>;
        })}
      </ul>
      <img
        src={flag}
        alt="flag"
        style={{
          width: "200px",
          height: "auto",
        }}
        loading="lazy"
      />
    </>
  );
};

export default CountryInfo;
