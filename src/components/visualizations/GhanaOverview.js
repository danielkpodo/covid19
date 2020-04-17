import React, { Component } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

class GhanaOverview extends Component {
  state = {
    cases: "",
    recovered: "",
    deaths: "",
    critical: "",
    active: "",
  };

  componentDidMount() {
    axios
      .get("https://corona.lmao.ninja/v2/countries/Ghana?yesterday=false")
      .then((response) => {
        const { cases, deaths, recovered, critical, active } = response.data;
        this.setState({
          cases,
          deaths,
          recovered,
          critical,
          active,
        });
      });
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "bottom",
  };

  render() {
    const { cases, deaths, recovered, critical, active } = this.state;
    return (
      <div className="charts ui tall stacked segment">
        <Doughnut
          data={{
            labels: [
              "Total Cases",
              "Total Deaths",
              "Recovered Cases",
              "Critcal Condition",
              "Active Cases",
            ],
            datasets: [
              {
                data: [cases, deaths, recovered, critical, active],
                label: "Ghana",
                backgroundColor: [
                  "#E8ED41",
                  "#ff0000",
                  "#FDCD56",
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                  "rgba(255, 159, 64, 0.6)",
                  "rgba(255, 99, 132, 0.6)",
                ],
              },
            ],
          }}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Snapshot of Ghana's Covid19 Current Situation",
              fontSize: 18,
              fontColor: "#333",
            },
            responsive: true,
            tooltips: { enabled: true },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />
      </div>
    );
  }
}

export default GhanaOverview;
