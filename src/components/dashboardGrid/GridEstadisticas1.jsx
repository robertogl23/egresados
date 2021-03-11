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
					<Box height={240} unidadMedida={"px"}>
						<Card>                    <PieChart
							data={data.habMetod}
							title={"Nivel para poseer habilidades metodológicas de investigación del Egresado"}
						/>
						</Card>
					</Box>
					<Box height={240} unidadMedida={"px"}>
						<Card>
							<BarChart data={data.docentes} />
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
		</div>
	);
};

export default GridEstadisticas1;
