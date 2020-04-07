import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import TabularData from "./TabularData";

const CountryStats = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("https://corona.lmao.ninja/countries").then((response) => {
      setCountries(response.data);
      setLoading(true);
    });
  }, []);

  return (
    <div className="country-stats">
      <div className="row">
        <div className="col s12 m6 offset-m3 l6 offset-l3">
          <SearchBox countries={countries} />
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <TabularData countries={countries} loading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default CountryStats;
