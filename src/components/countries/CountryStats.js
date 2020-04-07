import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import TabularData from "./TabularData";

const CountryStats = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(false);
    axios.get("https://corona.lmao.ninja/countries").then((response) => {
      setCountries(response.data);
      setLoading(true);
    });
  }, []);

  const handleCountryFilter = (event) => {
    setSearch(event.target.value);
  };

  const filteredCountries = countries.filter((c) => {
    return c.country.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="country-stats">
      <div className="row">
        <div className="col s12 m6 offset-m3 l6 offset-l3">
          <SearchBox
            onFilter={handleCountryFilter}
            countries={filteredCountries}
          />
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <TabularData countries={filteredCountries} loading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default CountryStats;
