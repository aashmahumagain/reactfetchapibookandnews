import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
const PieCharts = () => {
  const [options, setOptions] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
  });
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);
  return (
    <LineCharts>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart options={options} series={series} type="bar" width="500" />
          </div>
        </div>
      </div>
    </LineCharts>
  );
};

export default PieCharts;
const LineCharts = styled.div`
  .mixed-chart {
    margin-left: 40px;
  }
`;
