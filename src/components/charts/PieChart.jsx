import React from "react";
import Chart from "react-google-charts";

const PieChart = ({dataArray,title}) => {
	return (
		<Chart
			width={"100%"}
			height={"100%"}
			chartType='PieChart'
			loader={<div>Loading Chart</div>}
			data={dataArray}
			options={{
				title,
			}}
			rootProps={{ "data-testid": "1" }}
		/>
	);
};

export default PieChart;
