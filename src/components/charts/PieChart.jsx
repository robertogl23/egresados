import React from "react";
import Chart from "react-google-charts";
import Loading from "../shared/Loading";

const PieChart = ({ data, title }) => {
	return (
		<Chart
			width={"100%"}
			height={"100%"}
			chartType='PieChart'
			loader={<Loading typeSpinner={"ThreeDots"}/>}
			data={data}
			options={{
				title,
			}}
			rootProps={{ "data-testid": "1" }}
		/>
	);
};

export default PieChart;
