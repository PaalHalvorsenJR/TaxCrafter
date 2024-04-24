import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface PieChartProps {
  salary: string;
  tax: string;
}

const PieChart: React.FC<PieChartProps> = ({ salary, tax }) => {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    // Update chart data based on the received salary and tax props
    const salaryValue = parseInt(salary);
    const taxValue = parseInt(tax);

    if (!isNaN(salaryValue) && !isNaN(taxValue)) {
      setChartData([
        ["Salary", salaryValue],
        ["Net Salary", taxValue],
      ]);
    }
  }, [salary, tax]);

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    series: [
      {
        type: "pie", // Add the 'type' property with the value 'pie'
        name: "Cash",
        data: chartData,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
