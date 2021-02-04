import React from "react";
import styled from "styled-components";
import GridEstadisticas1 from "../components/dashboardGrid/GridEstadisticas1";
import Card from "../components/shared/Card";
import useSWR from "swr";
<<<<<<< HEAD
import Loading from "../components/shared/Loading";
=======
import GridDashBoard from "../components/dashboardEmpleadores/GridDashBoard";
>>>>>>> 2f427f75163944b2544aafd7b1559e00d4eb333f

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
const fetcher = (...args) =>
	fetch(...args).then((res) => res.json());
const Home = () => {
	const { data, error } = useSWR(
		"http://localhost:4000/egresados/data",
		fetcher
	);
	if (error) return <div>failed to load</div>;

	return (
		<HomeStyled>
			<section className='section-dashboard'>
				<div className='content-dashboard-header'>
					<section className='section-header'>
						<h1>Estadisticas Egresados</h1>
					</section>
				</div>
				<div className='content-grid'>
					<section className='selection-grid-1'>
						<GridEstadisticas1 />
					</section>
				</div>
				<div className='content-dashboard-header'>
					<section className='section-header'>
						<h1>Respuestas</h1>
					</section>
				</div>

				<div className='content-grid'>
					<section className='selection-grid-1'>
						<div className='table'>
							
								{
									!data ? (
										<Loading typeSpinner={"TailSpin"}/>
									)
									:(
									<GridDashBoard/>	

									)
								}
							
						</div>
					</section>
				</div>
			</section>
		</HomeStyled>
	);
};

export default Home;
