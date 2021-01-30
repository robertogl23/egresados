import React from "react";
import styled from "styled-components";
import { Box } from "../grid/Box";
import { Grid } from "../grid/Grid";
import Card from "./Card";
import PropTypes from "prop-types";

const BoxCellStyled = styled.div`
	//border: 1px solid red;
	width: 100%;
	overflow-y: auto;
	text-align: center;
	display: flex;
	align-items: center;
    justify-content: center;
	background: #13b469;
    
	.header {
		height: 100%;
		width: 100%;
		background: #13b469;
		display: flex;
		align-items: center;
        justify-content: center;
        color:#fff;
        
	}
	.content-body {
		height: 100%;
        width: 100%;
        
		background: #fff;


	}
`;
const DataTable = ({ headers, width }) => {
	return (
		<Card scroll_y={"auto"}>
			<Grid
				columns={headers.length}
				colQuantity={width}
				gap={0}
                height={"55px"}
                className="hola"
			>
				{headers.map((e, i) => (
					<Box key={i}>
						<BoxCellStyled>
							<div className='header'>
                                <div className="header-item">
                                    <div>
                                        {e}

                                    </div>
                                    <div className="line-left"></div>
                                </div>
                            </div>
						</BoxCellStyled>
					</Box>
				))}
			</Grid>
			{headers.map((e, i) => (
				<Grid
					columns={headers.length}
					colQuantity={width}
					gap={0}
                    height={"55px"}
                    boxShadow={false}
                    
				>
					{headers.map((e, i) => (
						<Box key={i}>
							<BoxCellStyled>
								<div className='content-body'>{e}</div>
							</BoxCellStyled>
						</Box>
					))}
				</Grid>
			))}
		</Card>
	);
};

DataTable.protoTypes = {
	swidth: PropTypes.string,
};

DataTable.defaultProps = {
	width: "auto",
};

export default DataTable;
