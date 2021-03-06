import React from "react";
import { Pie, Doughnut, Bar } from "react-chartjs-2";

const Chart = ({ salesData, selectedChart }) => {
  const labels = salesData.map((e) => e.month);
  const dataVal = salesData.map((e) => e.sales);
  const dynamicColors = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  let coloR = [];
  dataVal.map(() => coloR.push(dynamicColors()));

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Sales in 2020 (M)",
        backgroundColor: coloR,
        borderColor: `rgba(0,0,0,1)`,
        borderWidth: 1,
        data: dataVal,
      },
    ],
  };

  const options = {
    Plugin: {
      legend: { display: true, position: "right" },
      title: {
        display: true,
        text: selectedChart,
      },
    },
    datalabels: {
      display: true,
      color: "white",
    },
    tooltips: {
      backgroundColor: "#5a6e7f",
    },
  };

  let Charts = <h1>Plaese Select Chart</h1>;
  if (selectedChart.length > 0) {
    if (selectedChart === "PieChart") {
      Charts = <Pie data={chartData} options={options} />;
    } else if (selectedChart === "DoughnutChart") {
      Charts = <Doughnut data={chartData} options={options} />;
    } else if (selectedChart === "BarChart") {
      Charts = <Bar data={chartData} options={options} />;
    }
  }
  return <div style={{ width: 400 }}>{Charts}</div>;
};

export default Chart;
