import React, { Component } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import Spinner from "../Spinner";

class GhanaChart extends Component {
  state = {
    days: [],
    ghCases: [],
    isLoading: false,
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
          <Bar
            data={{
              labels: [...this.state.days],
              datasets: [
                {
                  data: [...this.state.ghCases],
                  label: "Ghana",
                  borderColor: "#3e95cd",
                  fill: false,
                  backgroundColor: "#EC564F",
                },
              ],
            }}
            options={{
              title: {
                display: this.props.displayTitle,
                text: "Trend of Covid19 Cases in Ghana for the past 34 days",
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

export default GhanaChart;
