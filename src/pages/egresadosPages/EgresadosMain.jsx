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
import DataTable from "../../components/dataTable/DataTable";
import Pdf from "react-to-pdf";
const ref = React.createRef();
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
		height: 780px;
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
	.datos-egresados1 {
		font-weight: bold;
		// margin-top: 10px;
		// margin-bottom: 10px;
	}
	.datos-egresados {
		font-weight: bold;
		// margin-bottom: 10px;
	}
`;

const fetcher = (...args) =>
	fetch(...args).then((res) => res.json());
const EgresadosMain = () => {
	const {
		preguntasFilter,
		loading,
		selectUser,
		correoEgresados,
	} = useContext(AppContext);
	const { data, error } = useSWR(
		"http://localhost:4000/egresados/egresados-main",
		fetcher
	);
	function getHttp(correo) {
		console.log(correoEgresados[0]);
		fetch(`http://localhost:4000/enviodecorreos/send-email/${correo}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);		
			});
	}

	if (error) return <div>failed to load</div>;
	if (!data) return <Loading typeSpinner={"Grid"} />;

	return (
		<EgresadosMainStyled>
			<div className='egresados-main' ref={ref}>
				<div className='content'>
					<Pdf targetRef={ref} filename='code-example.pdf'>
						{({ toPdf }) => (
							<button onClick={toPdf}>Generate Pdf</button>
						)}
					</Pdf>
					<div className='grid' ref={ref}>
						<Grid columns={6} rows={6}>
							<Box
								startCol={1}
								endCol={3}
								startRow={1}
								endRow={3}
							>
								<Card></Card>
							</Box>
							<Box
								startCol={3}
								endCol={5}
								startRow={1}
								endRow={3}
							>
								<Card></Card>
							</Box>
							<Box
								startCol={5}
								endCol={7}
								startRow={1}
								endRow={3}
							>
								<Card></Card>
							</Box>
							<Box
								startCol={1}
								endCol={3}
								startRow={3}
								endRow={7}
							>
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
							<Box
								startCol={3}
								endCol={7}
								startRow={3}
								endRow={5}
							>
								<Card>
									<div className='contenedor'>
										<div className='textcent'>
											<div className='fijo'>
												<h4>Perfil Egresado</h4>
											</div>
											<div className='contenedor-card-3'>
												{selectUser ? (
													
													<div className='content-egresados'>
														<button onClick={() => getHttp(correoEgresados[0])}>Enviar Correo
														</button>
														<p >Correo:<span>{correoEgresados}</span></p>
														<p >Nombre Completo:{}</p>
														<p >Telefono:{}</p>
														<p >Carrera:{}</p>
														<p >Matricula:{}</p>
														
													</div>
												
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
							<Box
								startCol={3}
								endCol={7}
								startRow={5}
								endRow={7}
							>
								<Card>
									<div className='contenedor'>
										<div className='textcent'>
											<div className='fijo'>
												<Select1 options={data.preguntas} />
											</div>
											<div className='contenedor-card-3'>
												{selectUser ? (
													loading ? (
														<Loading typeSpinner='TailSpin' />
													) : (
														<List data={preguntasFilter} />
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
		</EgresadosMainStyled>
	);
};

export default EgresadosMain;
