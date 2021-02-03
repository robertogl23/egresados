import React from "react";
import Chart from "react-google-charts";

const PieChart = ({ data, title }) => {
	return (
		<Chart
			width={"100%"}
			height={"100%"}
			chartType='PieChart'
			loader={<div>Loading Chart</div>}
			data={data}
			options={{
				title,
			}}
			rootProps={{ "data-testid": "1" }}
		/>
	);
};

export default PieChart;
