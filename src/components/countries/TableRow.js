import React from "react";
import moment from "moment";

const TableRow = (props) => {
  const { countries } = props;
  return (
    <tr>
      <td>
        <img
          src={countries.countryInfo.flag}
          alt={countries.country}
          className="responsive-img avatar"
        />
      </td>
      <td>{countries.country}</td>
      <td>{countries.cases}</td>
      <td>{countries.todayCases}</td>
      <td>{countries.deaths}</td>
      <td>{countries.todayDeaths}</td>
      <td>{countries.recovered}</td>
      <td>{countries.active}</td>
      <td>{countries.critical}</td>
      <td>{countries.casesPerOneMillion}</td>
      <td>{countries.deathsPerOneMillion}</td>
    </tr>
  );
};

export default TableRow;
