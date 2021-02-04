import React from "react";
import styled from "styled-components";
import { Box } from "../grid/Box";
import { Grid } from "../grid/Grid";
const BodyTableStyled = styled.div`
	// border:1px solid blue;
	height: auto;
	width: auto;
	.grid {
		//border: 1px solid green;
		height: 60px;
		width: fit-content;
	}
`;
const BoxStyled = styled.div`
	//border-right: .8px solid #fd92f4;
	width: 100%;
	height: 60px;
	.content-text {
		//border: .8px solid #b292fd;
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
        justify-content:center;
	}
	.line {
		height: 80%;
		border-radius: 8px;
		border: 0.8px solid rgb(0, 0, 0, 0.1);
	}
	.t {
		height: 100%;
		width: 100%;
		display: grid;
		align-items: center;
	}
    span{
        color:red;
    }
`;
const BodyTable = ({ data }) => {
	return (
		<BodyTableStyled>
			<div className='wrap'>
				<div className='grid'>
					<Grid columns={data.length} colSize={"260px"} gap={0}>
						{data.map((e, i) => (
							<Box key={i}>
								<BoxStyled>
									<div className='content-text'>
										<div className='text'>
											<div className='wrap-text'>
												<div className='t'>{
                                                    e !== "" ? (
                                                        e
                                                    ):(
                                                        <span >No a contestado</span>
                                                    )
                                                }</div>
											</div>
										</div>
										<div className='line'></div>
									</div>
								</BoxStyled>
							</Box>
						))}
					</Grid>
				</div>
			</div>
		</BodyTableStyled>
	);
};

export default BodyTable;
