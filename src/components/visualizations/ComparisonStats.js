import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Spinner from "../Spinner";

class ComparisonStats extends Component {
  state = {
    days: [],
    ghCases: [],
    isLoading: false,
    togoCases: [],
    coteCases: [],
    burkinaCases: [],
  };

  componentDidMount() {
    this.setState({ isLoading: false });
    axios
      .get("https://corona.lmao.ninja/v2/historical/Ghana?lastdays=34")
      .then((response) => {
        const { cases } = response.data.timeline;
        this.setState({
          days: Object.keys(cases),
          ghCases: Object.values(cases),
          isLoading: true,
        });
      });

    axios
      .get("https://corona.lmao.ninja/v2/historical/Togo?lastdays=34")
      .then((response) => {
        const { cases } = response.data.timeline;
        this.setState({
          togoCases: Object.values(cases),
          isLoading: true,
        });
      });

    axios
      .get("https://corona.lmao.ninja/v2/historical/Burkina%20faso?lastdays=34")
      .then((response) => {
        const { cases } = response.data.timeline;
        this.setState({
          burkinaCases: Object.values(cases),
          isLoading: true,
        });
      });

    axios
      .get(
        "https://corona.lmao.ninja/v2/historical/cote%20d'ivoire?lastdays=34"
      )
      .then((response) => {
        const { cases } = response.data.timeline;
        this.setState({
          coteCases: Object.values(cases),
          isLoading: true,
        });
      });
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "bottom",
  };

  render() {
    return (
      <div className="charts ui tall stacked segment">
        {this.state.isLoading === true ? (
          <Line
            data={{
              labels: [...this.state.days],
              datasets: [
                {
                  data: [...this.state.ghCases],
                  label: "Ghana",
                  borderColor: "#D04825",
                  fill: false,
                },
                {
                  data: [...this.state.togoCases],
                  label: "Togo",
                  borderColor: "#346B4E",
                  fill: false,
                },
                {
                  data: [...this.state.burkinaCases],
                  label: "Burkina Faso",
                  borderColor: "#031E4B",
                  fill: false,
                },
                {
                  data: [...this.state.coteCases],
                  label: "Cote d'ivoire",
                  borderColor: "#BE93FF",
                  fill: false,
                },
              ],
            }}
            options={{
              title: {
                display: this.props.displayTitle,
                text:
                  "Comparison of Ghana's Case Count to Neigbouring Countries over 34 days",
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
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default ComparisonStats;
