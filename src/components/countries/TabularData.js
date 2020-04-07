import React, { Fragment } from "react";
import Spinner from "../Spinner";
import TableRow from "./TableRow";

const TabularData = (props) => {
  const { countries, loading } = props;
  return (
    <div className="tabular-data container ">
      {loading ? (
        <table className="responsive-table centered highlight ui raised tall stacked segment">
          <thead>
            <tr>
              <th>Flag</th>
              <th>Country</th>
              <th>Cases</th>
              <th>Today's Cases</th>
              <th>Deaths</th>
              <th>Today's Death</th>
              <th>Recovered</th>
              <th>Active Cases</th>
              <th>Critical Condition</th>
              <th>Cases / 1M</th>
              <th>Deaths / 1M</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => (
              <TableRow key={index} countries={country} />
            ))}
          </tbody>
        </table>
      ) : (
        <Fragment>
          <Spinner />
          <p style={{ color: "#fff", textAlign: "center" }}>
            Fetching Countries data...
          </p>
        </Fragment>
      )}
    </div>
  );
};

export default TabularData;
