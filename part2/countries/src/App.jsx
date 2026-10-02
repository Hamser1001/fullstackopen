import { useState, useEffect } from "react";
import axios from "axios";
import CountryInfo from "./components/CountryInfo";

const App = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    console.log("effect run");
    // console.log("the value: ", value);
    let allCountries = {};

    const fetchCountries = async () => {
      if (!value.trim()) {
        setCountries([]);
        setErrorMessage(null);
        return;
      }

      console.log("fetching countries info...");
      // https://studies.cs.helsinki.fi/restcountries/api/all
      // https://studies.cs.helsinki.fi/restcountries/api/name/${country}

      try {
        const response = await axios.get(
          `https://studies.cs.helsinki.fi/restcountries/api/all`,
        );

        allCountries = response.data;
        // console.log("All Countries are: ", allCountries);

        const search = value.trim().toLowerCase();

        const filteredCountries = Object.values(allCountries).filter(
          (countries) => {
            // console.log("the value in filtred function", value);
            return countries?.name?.common
              ?.trim()
              .toLowerCase()
              .startsWith(search);
          },
        );

        console.log("Number of Filtered Countries", filteredCountries.length);
        console.log("Filtered Countries", filteredCountries);
        if (filteredCountries.length > 10) {
          setCountries([]);
          setErrorMessage("Too many matches, specify another filter");
        } else if (filteredCountries.length === 1) {
          setCountry(filteredCountries[0]);
          setCountries(filteredCountries);
          setErrorMessage(null);
        } else {
          setCountries(filteredCountries);
          setErrorMessage(null);
        }
      } catch (err) {
        console.log(err);
        setErrorMessage("Error fetching data");
      }
    };
    fetchCountries();
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (event) => {
    event.preventDefault();
    // setCountry(value);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        find countries: <input value={value} onChange={handleChange} />
      </form>
      {countries &&
        countries.map((country, index) => {
          return (
            countries.length > 1 && <p key={index}>{country.name.common}</p>
          );
        })}
      {countries.length === 1 && <CountryInfo country={country.name.common} />}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default App;
