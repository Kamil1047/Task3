import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const Chart = ({ salesData, selectedChart }) => {
  const labels = salesData.map((e) => e.month);
  const dataVal = salesData.map((e) => e.sales);

  const dynamicColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Sales 2020 (M)",
        backgroundColor: dynamicColor,
        borderColor: `rgba(0,0,0,1)`,
        borderWidth: 1,
        data: dataVal,
      },
    ],
  };

  const options = {
    legend: { display: true, position: "right" },
    title: {
      display: true,
      text: selectedChart,
    },

    datalabels: {
      display: true,
      color: "white",
    },
    tooltips: {
      backgroundColor: "#5a6e7f",
    },
  };
  console.log(options.title);
  let Charts = <h1>No Chart Selected</h1>;
  if (selectedChart.length > 0) {
    if (selectedChart === "PieChart") {
      Charts = <Pie data={chartData} options={options} />;
    } else {
      Charts = <Doughnut data={chartData} options={options} />;
    }
  }
  return <div style={{ width: "50%" }}>{Charts}</div>;
};

export default Chart;
