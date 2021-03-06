import React from "react";
import styled from "styled-components";
import { Box } from "../grid/Box";
import { Grid } from "../grid/Grid";
import Card from "../shared/Card";
import BodyTable from "./BodyTable";
import HeaderTable from "./HeaderTable";

const DataTableStyled = styled.div`
	height: 100%;
	width: auto;
	.headers {
		height: 50px;
		width: 100%;
		//border:1px solid red;
	}
	.content-body {
		height: auto;
		width: 100%;
		//border:1px solid red;
	}
	.text {
		//border:1px solid red;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 6px;
	}

	.line {
		border: 1px solid rgb(0, 0, 0, 0.1);
		height: 80%;
		border-bottom: 50%;
	}
`;
const DataTable = ({ headers, body }) => {
	return (
		<DataTableStyled>
			<Card>
				<div className='headers'>
					<Card>
						<Grid columns={headers.length || 0} gap={0}>
							{headers
								? headers.map((e, i) => (
										<Box key={i}>
											<div className='text'>
												<h5>{e}</h5>
												<div className='line'></div>
											</div>
										</Box>
								  ))
								: "No hay data"}
						</Grid>
					</Card>
					
				</div>
				<div className='content-body'>
						<Grid columns={body.length || 0}>
							{body
								? body.map((e, i) => <Box key={i}>{e}</Box>)
								: "No hay data"}
						</Grid>
					</div>
			</Card>
		</DataTableStyled>
	);
};

export default DataTable;
