import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import TabularData from "./TabularData";

const CountryStats = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [latestUpdate, setRecentUpdate] = useState("");

  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/all")
      .then((response) => {
        setRecentUpdate(response.data.updated);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(false);
    axios
      .get("https://corona.lmao.ninja/v2/countries?yesterday=false")
      .then((response) => {
        setCountries(response.data);
        setLoading(true);
      })
      .catch((error) => console.log(error));
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
          <TabularData
            countries={filteredCountries}
            loading={isLoading}
            latestUpdate={latestUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default CountryStats;
