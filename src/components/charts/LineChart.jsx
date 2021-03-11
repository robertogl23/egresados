import React from "react";
import Chart from "react-google-charts";
import Loading from "../shared/Loading";

export const LineChart = ({data, text1, text2}) => {
	return (
		<Chart
			width={"100%"}
			height={"100%"}
			chartType='LineChart'
			loader={<Loading  typeSpinner={"ThreeDots"}/>}
			data={data}
			options={{
				hAxis: {
					title: text1,
					
					
				},
				vAxis: {
					title: text2,
				},
			}}
			rootProps={{ "data-testid": "1" }}
		/>
	);
};
