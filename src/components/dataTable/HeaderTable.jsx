import React from "react";
import styled from "styled-components";
import { Box } from "../grid/Box";
import { Grid } from "../grid/Grid";

const HeaderTableStyled = styled.div`
	//border: 1px solid green;
	height: 60px;
	width: fit-content;
	position: sticky;
	top: 0;
	z-index: 2;
	background: #fff;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
		0 1px 2px rgba(0, 0, 0, 0.24);
`;
const BoxStyled = styled.div`
	//border-right: .8px solid #fd92f4;
	width: 100%;
	height: 60%;
	.content-text {
		border: .8px solid #b292fd;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.text {
		//border: .8px solid #b292fd;
		overflow-y: auto;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.wrap-text {
		//border: 0.8px solid #b292fd;
		width: 94%;
		height: 90%;
		overflow-y: auto;
		display: flex;
		align-items: center;
		font-weight:800;
	}
	.line {
		height: 80%;
		border-radius: 8px;
		border: 0.8px solid rgb(0, 0, 0, 0.1);
	}
	.t{
		height: 100%;
		width:100%;
		display: grid;
    align-items: center;

	}
`;
const HeaderTable = ({  data }) => {
	return (
		<HeaderTableStyled>
			<Grid columns={data.length}  gap={0}>
				{
					data.map((e,i) => (
						<Box key={i}>
							<BoxStyled>
								<div className='content-text'>
									<div className='text'>
										<div className='wrap-text'>
											<div className="t">
												{e}

											</div>
										</div>
									</div>
									<div className='line'></div>
								</div>
							</BoxStyled>
						</Box>
					))
				}
			</Grid>
		</HeaderTableStyled>
	);
};

export default HeaderTable;
