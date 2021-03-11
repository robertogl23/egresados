import React from 'react'
import styled from "styled-components";
import GridEstadisticas1 from "../components/dashboardGrid/GridEstadisticas1";
import GridDashBoard from "../components/dashboardEmpleadores/GridDashBoard";
import List from '../components/shared/List';
import { Grid } from '../components/grid/Grid';
import { Box } from '../components/grid/Box';
import Card from '../components/shared/Card';
import Loading from '../components/shared/Loading';
import useSWR from 'swr';
import GridDashBoard2 from '../components/dashboardEmpleadores/GridDashBoard2';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import ListFilter from '../components/shared/ListFilter';
import { LineChart } from '../components/charts/LineChart';
import useFetch from '../hooks/useFetch';
import ListFiler2 from '../components/shared/ListFiler2';



const HomeStyled = styled.main`
	//border: 1px solid blue;
	height: 100%;
	padding-top: 20px;

	.section-dashboard {
		height: auto;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow-x: auto;
		flex-direction: column;
	}
	.content-grid {
		display: block;
		height: 650px;
		width: 80%;
		overflow-x: auto;
		//border: 1px solid red;
	}
	.selection-grid-1 {
		height: 100%;
		padding-top: 1em;
		padding-bottom: 1em;
	}

	.content-dashboard-header {
		height: 60px;
		width: 80%;
		//border: 1px solid red;
	}
	.section-header {
		height: 100%;
		display: flex;
		justify-content: right;
		align-items: center;
	}
	.table {
		height: 100%;
		width: auto;
		overflow-y: auto;
	}
`;

const HomeEmpleadores = props => {
	const { data, loading } = useFetch("http://localhost:4000/empleadores/data/dashboard")
	return (

		<>
			{loading ? (
				"loading"
			) : (<div className='centrado'>
				<div className='estilos-grid'>
					<div className='title-co1'>
						<h1>Perfil de Empleadores</h1>
					</div>

					<Grid columns={2} rows={7} medidaRows={"300px"}>
						<Box>
							<Card>
								<div className='contenedor'>
									<div className='textcent'>
										<div className='fijo'>
											<h2>Nombre del empleador</h2>
										</div>
										<div className='contenedor-card'>
											<div className='border'>
												<List data={data.estadistica6} />

											</div>
										</div>
									</div>
								</div>
							</Card>
						</Box>


						<Box>
							<Card>
								<div className='contenedor'>
									<div className='textcent'>
										<div className='fijo'>
											<h2>Telefono</h2>
										</div>
										<div className='contenedor-card'>
											<div className='border'>
												<List data={data.estadistica7} />

											</div>
										</div>
									</div>
								</div>
							</Card>
						</Box>
						<Box>
							<Card>
								<div className='contenedor'>
									<div className='textcent'>
										<div className='fijo'>
											<h2>Correos Electronicos</h2>
										</div>
										<div className='contenedor-card'>
											<div className='border'>
												<List data={data.estadistica8} />
											</div>
										</div>
									</div>
								</div>
							</Card>
						</Box>
						<Box>
							<Card>
								<div className='contenedor'>
									<div className='textcent'>
										<div className='fijo'>
											<h2>Nombre comercial de la empresa</h2>
										</div>
										<div className='contenedor-card'>
											<div className='border'>
												<List data={data.estadistica9} />

											</div>
										</div>
									</div>
								</div>
							</Card>
						</Box>

						<Box>
							<Card>
								<div className='contenedor'>
									<div className='textcent'>
										<div className='fijo'>
											<h2>Conocimeientos de los egresados</h2>
										</div>
										<div className='contenedor-card'>
											<div className='border'>
												<PieChart data={data.estadistica3} />

											</div>
										</div>
									</div>
								</div>
							</Card>
						</Box>
						<Box>
							<Card>
								<div className='contenedor'>
									<div className='textcent'>
										<div className='fijo'>
											<h2>Nivel de valores de los egresados</h2>
										</div>
										<div className='contenedor-card'>
											<div className='border'>
												<PieChart data={data.estadistica5} />

											</div>
										</div>
									</div>
								</div>
							</Card>
						</Box>
						<Box startCol={1} endCol={3}>
							<Card>
								<div className='contenedor'>
									<div className='textcent'>
										<div className='fijo'>
											<h2>Nivel jerarquico del egresado</h2>
										</div>
										<div className='contenedor-card'>
											<div className='border'>
												<LineChart data={data.estadistica10} text1={"Tamaño de la empresa"} text2={"Numero de empleadores"} />

											</div>
										</div>
									</div>
								</div>
							</Card>
						</Box>
						<Box>
							<Card>
							<div className='contenedor'>
										<div className='textcent'>
											<div className='fijo'>
												<h4>Nombres de Empleador</h4>
											</div>
											<div className='contenedor-card-2'>
												<ListFiler2 data={data.estadistica6} />
											</div>
										</div>
									</div>		
						</Card>
						</Box>
					</Grid>

				</div>

			</div>
				)}
		</>
	)
}

export default HomeEmpleadores
