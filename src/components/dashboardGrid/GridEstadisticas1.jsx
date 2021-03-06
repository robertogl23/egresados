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
const GridEstadisticas1 = () => {
	const { data, loading } = useFetch(
		"http://localhost:4000/egresados/data/dashboard"
	);
	return (
		<>
		
			{loading ? (
				<Loading typeSpinner={"Grid"}/>
			) : (
				<Grid columns={2} rows={20} mq={false}>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart data={data.comunicacion}
							title={"Nivel de Comunicacion del Egresado"}
							 />
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<BarChart data={data.contenidoRelevante} />
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<PieChart
								data={data.comunicacion}
								title={"Nivel de Comunicacion del Egresado"}
							/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card> <div className='contenedor'>
							<div className='textcent'>
								<div className='fijo'>
									<h2>Nivel del Pensamiento Critico del Egresado</h2>
								</div>
								<div className='contenedor-card'>
									<div className='border'>
										<LineChart data={data.pensamientoCritico} />
									</div>
								</div>
							</div>
						</div>
						</Card>
					</Box>
				</Grid>
			)}
		</>
	);
};

export default GridEstadisticas1;

