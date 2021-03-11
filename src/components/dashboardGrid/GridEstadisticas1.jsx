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
const fetcher = (...args) =>
	fetch(...args).then((res) => res.json());
const GridEstadisticas1 = () => {
	const { data, loading } = useFetch(
		"http://localhost:4000/egresados/data/dashboard"
	);
	return (
		<div>
			{loading ? (
				"loding"
			) : (
				<Grid columns={2} rows={20} mq={false}>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart data={data.comunicacion} />
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>Hola</Card>
					</Box>
				</Grid>
			)}
		</div>
	);
};

export default GridEstadisticas1;
