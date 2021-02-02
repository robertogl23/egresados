import React,{useContext} from "react";
import styled from "styled-components";
import GridEstadisticas1 from "../components/dashboardGrid/GridEstadisticas1";
import DataTable from "../components/dataTable/DataTable";
import Card from "../components/shared/Card";
import { AppContext } from "../hooks/useContextApp";

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
		height: 550px;
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

const Home = () => {
	const { data } = useContext(AppContext);
	
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
							<Card>
								<DataTable/>
							</Card>
						</div>
					</section>
				</div>
			</section>
		</HomeStyled>
	);
};

export default Home;
