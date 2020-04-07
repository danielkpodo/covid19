import React, { Fragment } from "react";
import Spinner from "../Spinner";
import TableRow from "./TableRow";
import moment from "moment";

const TabularData = (props) => {
  const { countries, loading, latestUpdate } = props;
  let time = moment(latestUpdate).format("dddd, MMMM Do, YYYY / hh:mm:ss A");
  return (
    <div className="tabular-data container ">
      <p style={{ textAlign: "center", color: "#E8ED41", opacity: "0.8" }}>
        {loading
          ? countries.length !== 0
            ? `Last updated: ${time}`
            : null
          : null}
      </p>
      {loading ? (
        countries.length !== 0 ? (
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
          <h3
            style={{ textAlign: "center", color: "#fff", fontSize: "1.5rem" }}
          >
            No Countries found, try again...
          </h3>
        )
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
