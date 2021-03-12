import React from "react";
import useSWR from "swr";
import { Box } from "../grid/Box";
import { Grid } from "../grid/Grid";
import Card from "../shared/Card";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import Loading from "../shared/Loading";
import { LineChart } from "../charts/LineChart";
import useFetch from "../../hooks/useFetch";
import Paginacion from "../paginacion/Paginacion";

const fetcher = (...args) =>
	fetch(...args).then((res) => res.json());
const GridEstadisticas6 = () => {
	const { data, loading } = useFetch(
		"http://localhost:4000/egresados/data/dashboard5"
	);
	return (
		<>
		
			{loading ? (
				<Loading typeSpinner={"Grid"}/>
			) : (
				<Grid columns={2} rows={20} mq={false}>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<BarChart data={data.segEgr} />
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<BarChart data={data.formacion} />
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<BarChart data={data.contratado} />
						</Card>
					</Box>
				</Grid>
			)}
		</>
	);
};

export default GridEstadisticas6;

