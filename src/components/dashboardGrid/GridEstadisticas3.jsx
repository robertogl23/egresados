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
const GridEstadisticas3 = () => {
	const { data, loading } = useFetch(
		"http://localhost:4000/egresados/data/dashboard2"
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
								data={data.ciudadana}
								title={"Nivel para integrarse a la comunidad del Egresado"}
							/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart
								data={data.sensibilidadEstetica}
								title={"Nivel de apreciar y valorar diversas formas artísticas del Egresado"}
							/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart
								data={data.diseñar}
								title={"Nivel para diseñar, configurar y administrar redes computacionales del Egresado"}
							/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart
								data={data.diseñar2}
								title={"Nivel para diseñar, desarrollar y aplica modelos computacionales para solucionar problemas del Egresado"}
							/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart
								data={data.diseñar3}
								title={"Nivel para diseñar e implementar interfaces hombre-máquina y máquina-máquina para la automatización de sistemas del Egresado"}
							/>
						</Card>
					</Box>
					
				</Grid>
			)}
		</>
	);
};

export default GridEstadisticas3;

