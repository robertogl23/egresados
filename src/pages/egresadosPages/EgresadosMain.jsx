import React, { useContext } from "react";
import styled from "styled-components";
import { Box } from "../../components/grid/Box";
import { Grid } from "../../components/grid/Grid";
import Card from "../../components/shared/Card";
import List from "../../components/shared/List";
import Select1 from "../../components/shared/Select1";
import useSWR from "swr";
import Loading from "../../components/shared/Loading";
import { AppContext } from "../../hooks/useContextApp";
import ListFilter from "../../components/shared/ListFilter";
import GridEstadisticas1 from "../../components/dashboardGrid/GridEstadisticas1";

const EgresadosMainStyled = styled.div`
	// border:1px solid #8c00ff;
	height: 100%;
	position: static;
	width: auto;
	overflow: hidden;
	.egresados-main {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.content {
		margin-top: 20px;
		display: flex;
		//border: 1px solid #00ff55;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	.title {
		text-align: center;
	}
	.grid {
		//border: 1px solid #0044ff;
		height: 180px;
		width: 85%;
	}
	.card-title {
		margin-top: 10px;
		margin-left: 10px;
	}
	.content-2 {
		margin-top: 16px;
		//border: 1px solid #0044ff;
		height: 450px;
		width: 85%;
	}
	.grid-2 {
		height: 100%;
		width: 100%;
	}
	.content-text {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 46px;
		font-weight: 900;
		padding-top: 20px;
	}
`;
const fetcher = (...args) =>
	fetch(...args).then((res) => res.json());
const EgresadosMain = () => {
	const { data, error } = useSWR(
		"http://localhost:4000/egresados/egresados-main",
		fetcher
	);
	const {
		preguntasFilter,
		loading,
		selectUser,
	} = useContext(AppContext);
	if (error) return <div>failed to load</div>;
	if (!data) return <Loading typeSpinner={"Grid"} />;

	return (
		<EgresadosMainStyled>
			<div className='egresados-main'>
				<div className='title'>
					<h2>Sistema Egresados</h2>
				</div>
				<div className='content'>
					<div className='grid'>
						<Grid columns={3}>
							<Box>
								<Card>
									<div className='card-title'>
										<h4>Respuestas Totales</h4>
										<div className='content-text'>
											<span>{data.numeroEgresados}</span>
										</div>
									</div>
								</Card>
							</Box>
							<Box>
								<Card>
									<div className='card-title'>
										<h4>Egresados Titulados Totales</h4>
										<div className='content-text'>
											<span>{data.titulados}</span>
										</div>
									</div>
								</Card>
							</Box>
							<Box>
								<Card>
									<div className='card-title'>
										<h4>Egresados con empleo</h4>
										<div className='content-text'>
											<span>{data.data3}</span>
										</div>
									</div>
								</Card>
							</Box>
						</Grid>
					</div>
					<div className='content-2'>
						<div className='grid-2'>
							<Grid columns={3} >
								<Box startRow={1} endRow={3}>
									<Card>
										<div className='contenedor'>
											<div className='textcent'>
												<div className='fijo'>
													<h4>Nombres de Egresados</h4>
												</div>
												<div className='contenedor-card-2'>
													<ListFilter data={data.nombres} />
												</div>
											</div>
										</div>
									</Card>
								</Box>
								<Box startCol={2} endCol={4}>
									<Card>
										<div className='contenedor'>
											<div className='textcent'>
												<div className='fijo'>
													<Select1
														options={data.preguntas}
													/>
												</div>
												<div className='contenedor-card-2'>
													{selectUser ? (
														loading ? (
															<Loading typeSpinner='TailSpin' />
														) : (
															<List
																data={preguntasFilter}
															/>
														)
													) : (
														<span>
															No ha seleccionado nombre de
															egresado
														</span>
													)}
												</div>
											</div>
										</div>
									</Card>
								</Box>
							</Grid>
						</div>
					</div>
				</div>
			</div>
		</EgresadosMainStyled>
	);
};

export default EgresadosMain;
