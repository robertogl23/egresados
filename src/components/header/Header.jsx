import React from "react";
import styled from "styled-components";
import logoTesi from "../../img/LOGO_TESI.jpg";
const HeaderStyled = styled.header`
	//border: 1px solid red;
	height: 64px;
	width: 100%;
	position: sticky;
	top:0;
	z-index: 1;
	background: #fff;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
		0 1px 2px rgba(0, 0, 0, 0.24);
		img{
			width:80px;
		}
`;
const Header = () => {
	return (
		<HeaderStyled>
			<img src={logoTesi} alt="logo-tesi"/>
		</HeaderStyled>
	);
};

export default Header;
