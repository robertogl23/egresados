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
const GridEstadisticas4 = () => {
	const { data, loading } = useFetch(
		"http://localhost:4000/egresados/data/dashboard3"
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
								data={data.identificarComprender}
								title={"Nivel para identificar y comprender las tecnologías de hardware del Egresado"}
							/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart
								data={data.diseñarBases}
								title={"Nivel para diseñar, desarrollar y administrar bases de datos conforme a requerimientos definidos del Egresado"}
							/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart
								data={data.soluciones}
								title={"Nivel para integrar soluciones computacionales con diferentes tecnologías del Egresado"}
							/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>                    <PieChart
							data={data.empresarial}
							title={"Nivel para desarrollar una visión empresarial para detectar áreas de oportunidad del Egresado"}
						/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart
								data={data.desempeñar}
								title={"Nivel para desempeñar sus actividades profesionales del Egresado"}
							/>
						</Card>
					</Box>
				</Grid>
			)}
		</>
	);
};

export default GridEstadisticas4;

