import React from "react";
import styled from "styled-components";
import logoTesi from "../../img/LOGO_TESI.png";
import { NavLink } from "react-router-dom";
const HeaderStyled = styled.header`

	height: 64px;
	width: 100%;
	position: sticky;
	top: 0;
	z-index: 1;
	background: #fff;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
		0 1px 2px rgba(0, 0, 0, 0.24);
	display: flex;
	align-items: center;
	justify-content:space-between;
	padding-left:60px;
	padding-right:60px;
	img {
		width: 160px;
	}

	ul{
		display: flex;
		flex-direction:row;
	}
	li{
		margin-left:16px;
	}
	a{
		text-decoration:none;
	}
`;
const Header = () => {
	return (
		<HeaderStyled>
			<div>
				<NavLink to='/'>
					<img src={logoTesi} alt='logo-tesi' />
				</NavLink>
			</div>

				<ul>

					<li>
						<NavLink
							exact
							to='/'
							activeClassName='selected'
						>
							Inicio
						</NavLink>
					</li>

					<li>
						<NavLink
							to='/empleadores'
							activeClassName='selected'
						>
							Empleadores
						</NavLink>
					</li>
					<li>
						<NavLink to='/egresados' activeClassName='selected'>
							Egresados
						</NavLink>
					</li>
				</ul>

		</HeaderStyled>
	);
};

export default Header;
