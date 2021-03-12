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
const GridEstadisticas2 = () => {
	const { data, loading } = useFetch(
		"http://localhost:4000/egresados/data/dashboard1"
	);
	return (
		<>
		
			{loading ? (
				<Loading typeSpinner={"Grid"}/>
			) : (
				<Grid columns={2} rows={20} mq={false}>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart
								data={data.solucionDeProblemas}
								title={"Nivel para identificar problemas del Egresado"}
							/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart
								data={data.interaccionSocial}
								title={"Nivel para formar parte de equipos de trabajo del Egresado"}
							/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart
								data={data.aprendizaje}
								title={"Nivel de aprendizaje del Egresado"}
							/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart
								data={data.consistenciaEtica}
								title={"Nivel para asumir principios éticos del Egresado"}
							/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart
								data={data.globalizado}
								title={"Nivel para comprender los aspectos interdependientes del mundo globalizado del Egresado"}
							/>
						</Card>
					</Box>
				</Grid>
			)}
		</>
	);
};

export default GridEstadisticas2;

