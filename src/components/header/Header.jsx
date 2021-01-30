import React from "react";
import styled from "styled-components";
const HeaderStyled = styled.header`
	//border: 1px solid red;
	height: 64px;
	width: 100%;
	position:absolute;
	z-index:-1;
	background:#13b469;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

`;
const Header = () => {
	return <HeaderStyled>header</HeaderStyled>;
};

export default Header;
