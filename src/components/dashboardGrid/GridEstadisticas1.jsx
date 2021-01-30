import React from "react";
import { Box } from "../grid/Box";
import { Grid } from "../grid/Grid";
import Card from "../shared/Card";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import SliceChart from "../charts/SliceChart";

const GridEstadisticas1 = () => {
	return (
		<Grid columns={3} rows={2} mq={false}>
			<Box startCol={1} endCol={3}>
				<Card>
					<BarChart />
				</Card>
			</Box>
			<Box>
				<Card>
					<PieChart />
				</Card>
			</Box>
			<Box>
				<Card>
					<SliceChart />
				</Card>
			</Box>
			<Box>
				<Card>
					<PieChart />
				</Card>
			</Box>
			<Box>
				<Card>
					<SliceChart />
				</Card>
			</Box>
		</Grid>
	);
};

export default GridEstadisticas1;
