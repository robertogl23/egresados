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
	.selected {
		//border:1px solid #159756;

		color: red;
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
	a {
		text-decoration: none;
	}
`;
const AsideEgresados = () => {
	return (
		<AsideEgresadosStyled>
			<Card>
				<div className='title'>
					<h3>Sistema de egresados</h3>
				</div>
				<nav>
					<ul>
						
						<li>
							<NavLink
								to='/egresados/sastifaccion'
								activeClassName='selected'
							>
								Satisfaccion de Egresados
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
					</ul>
				</nav>
			</Card>
		</AsideEgresadosStyled>
	);
};

export default AsideEgresados;
