import React from "react";

import ReactApexChart from "react-apexcharts";

function Chart() {
  const series = [
    {
      name: "Stock",
      data: [
        555,
        12038,
        69030,
        88369,
        167466,
        932638,
        2055423,
        3343777,
        3845718,
      ],
    },
    {
      name: "Stock  Increase",
      data: [28, 284, 9394, 42710, 76026, 191853, 501538, 1029651, 1255481],
    },
    {
      name: "Stock Decrease",
      data: [17, 259, 1666, 2996, 6472, 49675, 140658, 238619, 269567],
    },
  ];
  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/22/22",
        "2/1/22",
        "2/15/22",
        "3/1/22",
        "3/15/22",
        "4/1/22",
        "4/15/22",
        "5/1/22",
        "5/7/22",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>Binance chart</h2>
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
      
    </div>
  );
}

export default Chart;
