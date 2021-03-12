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
const GridEstadisticas5 = () => {
	const { data, loading } = useFetch(
		"http://localhost:4000/egresados/data/dashboard4"
	);
	return (
		<>
		
			{loading ? (
				<Loading typeSpinner={"Grid"}/>
			) : (
				<Grid columns={2} rows={20} mq={false}>
						
                        <Box height={240} unidadMedida={"px"}>
						<Card>                    <PieChart
							data={data.habMetod}
							title={"Nivel para poseer habilidades metodológicas de investigación del Egresado"}
						/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<BarChart data={data.docentes} txt1={"Grafica 1"} />
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<BarChart data={data.conociTeor} />
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<BarChart data={data.persAdm} />
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<BarChart data={data.persAdm2} />
						</Card>
					</Box>
				</Grid>
			)}
		</>
	);
};

export default GridEstadisticas5;

