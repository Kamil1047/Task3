import React, { useState } from "react";
import { Button } from "reactstrap";

const Form = (props) => {
  const [fetchData, setFetchData] = useState({
    month: "",
    sales: "",
  });

  const [selectedChart, setSelectedCHart] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const salesData = {
      month: fetchData.month,
      sales: +fetchData.sales,
    };

    props.onAddSales(salesData);
  };
  props.selectedChart(selectedChart);
  //console.log(selectedChart);
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>Month: </label>
          <select
            onChange={(e) =>
              setFetchData({ ...fetchData, month: e.target.value })
            }
            required
          >
            <option value="">--Select Month--</option>
            <option value="Janaury">Janaury</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div>
          <label>Sales: </label>
          <input
            type="number"
            placeholder="Sales in Millions"
            onChange={(e) =>
              setFetchData({
                ...fetchData,
                sales: e.target.value,
              })
            }
            required
          />
        </div>

        <Button color="primary" type="submit">
          Submit
        </Button>
      </form>
      <div>
        <label>Chart: </label>
        <select onChange={(e) => setSelectedCHart(e.target.value)}>
          <option value="">--Select Chart--</option>
          <option value="PieChart">Pie Chart </option>
          <option value="DoughnutChart">Doughnut Chart</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
