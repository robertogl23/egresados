import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(
		${(props) => props.col},
		${(props) => props.colSize}
	);
	grid-template-rows: repeat(${(props) => props.rows}, 1fr);
	grid-gap: ${(props) => props.gap}em;
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	${(props) =>
		props.mq ||
		`
            @media (max-width:1060px){
                display:flex;
                flex-direction:column;
            }
        `}
`;
const Grid = ({
	children,
	rows,
	columns,
	gap,
	width,
	mq,
	height,
	colSize,
	boxShadow,
}) => (
	<Content
		rows={rows}
		col={columns}
		gap={gap}
		width={width}
		mq={mq}
		height={height}
		colSize={colSize}
		boxShadow={boxShadow}
	>
		{children}
	</Content>
);

Grid.protoTypes = {
	rows: PropTypes.number,
	columns: PropTypes.number,
	gap: PropTypes.number,
	width: PropTypes.string,
	mq: PropTypes.bool,
	height: PropTypes.string,
	colSize: PropTypes.string,
	boxShadow: PropTypes.bool,
};
Grid.defaultProps = {
	rows: 1,
	columns: 1,
	gap: 1,
	width: "100%",
	mq: true,
	height: "100%",
	colSize: "1fr",
	boxShadow: true,
};
export { Grid };
