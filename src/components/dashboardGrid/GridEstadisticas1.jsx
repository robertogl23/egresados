import React from "react";
import useSWR from "swr";
import { Box } from "../grid/Box";
import { Grid } from "../grid/Grid";
import Card from "../shared/Card";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import { LineChart } from "../charts/LineChart";
const fetcher = (...args) =>
	fetch(...args).then((res) => res.json());
const GridEstadisticas1 = () => {
	const { data, error } = useSWR(
		"http://localhost:4000/egresados/data/dashboard",
		fetcher
	);
	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	return (
		<Grid columns={3} rows={2} mq={false}>
			<Box startCol={1} endCol={3}>
				<Card>
					<BarChart data={data.carreras} />
				</Card>
			</Box>
			<Box>
				<Card>
					<PieChart
						data={data.titulados}
						title={"Egresados Titulados"}
					/>
				</Card>
			</Box>
			<Box startCol={1} endCol={4}>
				<Card>
					<LineChart data={data.dateTitulacion[0]} />
				</Card>
			</Box>
			
		
		</Grid>
	);
};

export default GridEstadisticas1;
