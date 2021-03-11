import React from "react";
import Chart from "react-google-charts";
import Loading from "../shared/Loading";
const BarChart = ({data}) => {
	return (
		<Chart
			width={"110%"}
			height={"110%"}
			chartType='BarChart'
			loader={<Loading typeSpinner={"ThreeDots"}/>}
			data={
				data
			}
			options={{
				legend: { position: "top" },
				hAxis: {
					title: "Numero de empleadores que a respondido",
				},
			}}
			rootProps={{ "data-testid": "3" }}
		/>
	);
};

export default BarChart;
