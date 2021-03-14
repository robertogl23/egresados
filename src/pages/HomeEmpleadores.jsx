import React, { useContext } from "react";
import styled from "styled-components";
import List from "../components/shared/List";
import { Grid } from "../components/grid/Grid";
import { Box } from "../components/grid/Box";
import Card from "../components/shared/Card";
import Loading from "../components/shared/Loading";
import PieChart from "../components/charts/PieChart";
import { LineChart } from "../components/charts/LineChart";
import useFetch from "../hooks/useFetch";
import ListFiler2 from "../components/shared/ListFiler2";
import { AppContext } from "../hooks/useContextApp";

const ref = React.createRef();


const HomeEmpleadores = (props) => {
	const {
		selectEmple,
		nombreEmple,
		correoeEmple,
		telEmple,
		empresaEmple
	} = useContext(AppContext);
	const { data, loading } = useFetch(
		"http://localhost:4000/empleadores/data/dashboard2"
	);
	return (
		<>
			{loading ? (
				<Loading typeSpinner={'Grid'}/>
			) : (
				<div className='centrado'>
					<div className='estilos-grid' ref={ref}>
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
												<h2>
													Nombre comercial de la empresa
												</h2>
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
												<h2>
													Conocimeientos de los egresados
												</h2>
											</div>
											<div className='contenedor-card'>
												<div className='border'>
													<PieChart
														data={data.estadistica3}
													/>
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
												<h2>
													Nivel de valores de los egresados
												</h2>
											</div>
											<div className='contenedor-card'>
												<div className='border'>
													<PieChart
														data={data.estadistica5}
													/>
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
												<h2>
													Nivel jerarquico del egresado
												</h2>
											</div>
											<div className='contenedor-card'>
												<div className='border'>
													<LineChart
														data={data.estadistica10}
														text1={"Tamaño de la empresa"}
														text2={"Numero de empleadores"}
													/>
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
												<ListFiler2
													data={data.estadistica6}
												/>
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
                                            <h4>Perfil Egresado</h4>
                                        </div>
                                        <div className='contenedor-card-3 p-tp'>
                                            {selectEmple ? (

                                                <div className='content-egresados'>
                                                    <button >Enviar Correo
														</button>
                                           
                                                    <p className='datos-egresados'>Nombre Completo:<span>{nombreEmple}</span></p>
                                                    <p className='datos-egresados'>Telefono:<span> {telEmple} </span></p>
                                                    <p className='datos-egresados'>Correo:<span> {correoeEmple} </span></p>
                                                   

                                                </div>

                                            ) : (
                                                <span className="message-selected">
                                                    No ha seleccionado nombre de
                                                    Empleador
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
			)}
		</>
	);
};

export default HomeEmpleadores;
