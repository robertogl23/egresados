import React from "react";
import styled from "styled-components";
import BodyTable from "./BodyTable";
import HeaderTable from "./HeaderTable";


const DataTableStyled = styled.div`
	height: 100%;
	width: auto;
	.wrap {
		width: auto;
		height: 100%;
	}
	.table {
		display: block;
		height: 100%;
		width: 100%;
		//border: 1px solid red;
	}
`;
const DataTable = ({data}) => {
	
	return (
		<DataTableStyled>
			<div className='wrap'>
				<div className='table'>
					<HeaderTable data={data.preguntas}/>
					{
						data.respuestas.map((e,i) => (
							<BodyTable key={i} data={e}/>
						))
					}
				</div>
			</div>
		</DataTableStyled>
	);
};

export default DataTable;
