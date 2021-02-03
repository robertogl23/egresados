import React from "react";
import styled from "styled-components";
import logoTesi from "../../img/LOGO_TESI.png";
import {
	Link,
} from "react-router-dom";
const HeaderStyled = styled.header`
	//border: 1px solid red;
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
	img {
		width: 160px;
		margin-left: 40px;
	}
`;
const Header = () => {
	return (
		<HeaderStyled>
			<Link to='/'><img src={logoTesi} alt='logo-tesi' /></Link>
			
			<li>
				<Link to='/empleadores'>Empleadores</Link>
			</li>
		</HeaderStyled>
	);
};

export default Header;
