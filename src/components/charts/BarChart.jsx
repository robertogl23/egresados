import React from "react";
import Chart from "react-google-charts";
const BarChart = ({data}) => {
	return (
		<Chart
			width={"100%"}
			height={"100%"}
			chartType='BarChart'
			loader={<div>Loading Chart</div>}
			data={
				data
			}
			options={{
				legend: { position: "top" },
			}}
			rootProps={{ "data-testid": "3" }}
		/>
	);
};

export default BarChart;
