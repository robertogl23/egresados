import React from "react";
import useSWR from "swr";
import PieChart from "../charts/PieChart";
import { Box } from "../grid/Box";
import { Grid } from "../grid/Grid";
import Card from "../shared/Card";
import BarChart from "../charts/BarChart";
import Loading from "../shared/Loading";
import useFetch from "../../hooks/useFetch";

const GridDashBoard = () => {
	const {data} = useFetch("http://localhost:4000/empleadores/data/dashboard")
	if (!data) return <Loading typeSpinner={"Grid"} />;
	return (
		<Grid columns={6} rows={2}>
			
			<Box startCol={1} endCol={4}>
				<Card>
					<PieChart
						title={"Que tipo empresas hay"}
						data={data.estadistica1}
					/>
				</Card>
			</Box>
			<Box startCol={4} endCol={7}>
				<Card>
					<PieChart
						title={
							"Carreras de los egresados que contratan los empleadores"
						}
						data={data.estadistica2}
					/>
				</Card>
			</Box>
			<Box startCol={-7} endCol={-1}>
				<Card>
					<BarChart data={data.estadistica5} />
				</Card>
			</Box>
			
		</Grid>
		
	);
};

export default GridDashBoard;
