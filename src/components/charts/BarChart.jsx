import React from "react";
import Chart from "react-google-charts";
import Loading from "../shared/Loading";
const BarChart = ({data}) => {
	return (
		<Chart
			width={"100%"}
			height={"100%"}
			chartType='BarChart'
			loader={<Loading typeSpinner={"ThreeDots"}/>}
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
