import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Card from "../shared/Card";
const AsideEgresadosStyled = styled.div`
	//border:1px solid red;
	width: 13em;
	height: 100vh;
	position: fixed;
	left: 0;
	.title {
		padding-top: 10px;
	}
	nav {
		margin-top: 10px;
		//border:1px solid red;
		height: auto;
	}
	ul {
		height: 100%;
		width: 100%;
	}
	li {
		height: 50px;
		width: 100%;
		display: flex;
		align-items: center;
		padding-left: 10px;
		//border:1px solid red;
	}
`;
const AsideEgresados = () => {
	return (
		<AsideEgresadosStyled id="section-egresados">
			<Card>
				<div className='title'>
					<h3>Sistema de egresados</h3>
				</div>
				<nav>
					<ul>
						<li>
							<NavLink
								to='/egresados/ubicacion-egresados'
								activeClassName='selected'
							>
								Ubicacion Laboral
							</NavLink>
						</li>

						<li>
							<NavLink
								to='/egresados/perfil-egresados'
								activeClassName='selected'
							>
								Perfil de egresados
							</NavLink>
							
						</li>
						<li>
						<NavLink
								to='/egresados/imprimir'
								activeClassName='selected'
							>
								Imprimir
							</NavLink>
						</li>
						<li>
						<NavLink
								to='/egresados/imprimir'
								activeClassName='selected'
							>
								dashboard1
							</NavLink>
						</li>
						
					</ul>
				</nav>
			</Card>
		</AsideEgresadosStyled>
	);
};

export default AsideEgresados;
