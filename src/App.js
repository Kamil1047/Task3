import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";
import Chart from "./components/Chart";

const App = () => {
  const [salesData, setSalesData] = useState([]);
  const [selectedCHart, setSelectedChart] = useState("");

  const onAddSales = (sales) => {
    setSalesData((prevSalesData) => {
      const updatedSalesData = [...prevSalesData];
      updatedSalesData.push({ month: sales.month, sales: sales.sales });
      return updatedSalesData;
    });
  };

  const selectedChart = (selectdChart) => {
    setSelectedChart(selectdChart);
  };

  let content = <h1>No Data Found</h1>;

  if (salesData.length > 0) {
    content = <Chart salesData={salesData} selectedChart={selectedCHart} />;
  }

  return (
    <div className="App">
      <Form onAddSales={onAddSales} selectedChart={selectedChart} />
      {content}
    </div>
  );
};

export default App;
