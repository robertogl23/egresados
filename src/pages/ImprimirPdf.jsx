import React, { useEffect } from "react";
import GridEstadisticas2 from "../components/dashboardGrid/GridEstadisticas2";
import GridEstadisticas1 from "../components/dashboardGrid/GridEstadisticas1";
import GridEstadisticas3 from "../components/dashboardGrid/GridEstadisticas3";
import GridEstadisticas4 from "../components/dashboardGrid/GridEstadisticas4";
import GridEstadisticas5 from "../components/dashboardGrid/GridEstadisticas5";
import GridEstadisticas6 from "../components/dashboardGrid/GridEstadisticas6";
import LOGO_TESI from "../img/LOGO_TESI.png";
import logodelestado from "../img/logodelestado.jpg";
import styled from "styled-components";
import { Grid } from "../components/grid/Grid";
import { useParams } from 'react-router-dom';
const ImprimirPdfStyled = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	.logo1 {
		height: 100px;
		width: 200px;
	}
	.logo2 {
		height: 100px;
		width: 200px;
	}
	img {
		height: auto;
		width: 100%;
	}
	button {
		height: 30px;
		width: 30px;
	}
	.boton {
		display: block;
	}
	.flex {
		display: flex;
		flex-direction: column;
        height:100%;
	}
    
`;
const ImprimirPdf = () => {
	let { id } = useParams();
	useEffect(() => {
		document.querySelector("header").style.display = "none";
		console.log(
			(window.document.getElementById(
				"section-egresados"
			).style.display = "none")
		);
		window.document.querySelector("section").style.padding =
			"0";
	}, []);

	const ImprimirPdf = () => {
		window.document.querySelector("button").style.display =
			"none";
		window.print();
	};
	return (
		<div className='flex'>
			<ImprimirPdfStyled>
				<div className='logo1'>
					<img src={LOGO_TESI} />
				</div>
				<div className='logo2'>
					<img src={logodelestado} />
				</div>
			</ImprimirPdfStyled>

			<div className='boton'>
				<button onClick={ImprimirPdf}>pdf</button>
			</div>
			<div className="cont-grid">
				{/* {
					id == 1 && <GridEstadisticas1 />

				}
				{
					id == 2 && <GridEstadisticas2 />

				}
				{
					id == 3 && <GridEstadisticas3 />

				}
				{
					id == 4 && <GridEstadisticas4 />

				}
				{
					id == 5 && <GridEstadisticas5 />

				}
				{
					id == 6 && <GridEstadisticas6 />

				} */}


			</div>

		</div>
	);
};

export default ImprimirPdf;
