import React from "react";
import Chart from "react-google-charts";
import Loading from "../shared/Loading";

export const LineChart = ({data}) => {
	return (
		<Chart
			width={"100%"}
			height={"100%"}
			chartType='LineChart'
			loader={<Loading  typeSpinner={"ThreeDots"}/>}
			data={data}
			options={{
				hAxis: {
					title: "Año",
				},
				vAxis: {
					title: "Numero de egresados titulados",
				},
			}}
			rootProps={{ "data-testid": "1" }}
		/>
	);
};
