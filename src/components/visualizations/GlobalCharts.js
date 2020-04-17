import React, { Component } from "react";
import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";

class GlobalCharts extends Component {
  state = {
    cases: "",
    todayCases: "",
    deaths: "",
    recovered: "",
    active: "",
    critical: "",
  };

  componentDidMount() {
    axios.get("https://corona.lmao.ninja/v2/all").then((response) => {
      const {
        cases,
        todayCases,
        deaths,
        recovered,
        active,
        critical,
      } = response.data;

      this.setState({
        cases: cases,
        todayCases: todayCases,
        deaths: deaths,
        recovered: recovered,
        active: active,
        critical: critical,
      });
    });
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "top",
  };

  render() {
    const {
      cases,
      todayCases,
      deaths,
      recovered,
      active,
      critical,
    } = this.state;

    return (
      <div className="charts ui tall stacked segment">
        <HorizontalBar
          data={{
            labels: [
              "Cases",
              "Today Cases",
              "Active Cases",
              "Deaths",
              "Recovered",
              "Critical",
            ],
            datasets: [
              {
                data: [cases, todayCases, active, deaths, recovered, critical],
                label: "Global Coronavirus Statistics",
                backgroundColor: [
                  "#EA5E83",
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
              text: "Global Overview of Covid19 Currently",
              fontSize: 18,
              fontColor: "#333",
            },
            responsive: true,
            tooltips: { enabled: true },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              fontColor: "#00ff00",
            },
          }}
        />
      </div>
    );
  }
}

export default GlobalCharts;
