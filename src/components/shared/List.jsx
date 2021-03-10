import React from "react";

const List = ({ data }) => {


	return (
		<div className='claselista'>
			<ul>
				{!data
					? "no hay información"
					: data.map((e, i) => (
							<li key={i} className='borderx2'>
								<div className='cont-list'>{
									!e || !e[0] ?(
										"No ha respondido"
									):(
										e
									)

								}</div>
							</li>
					  ))}
			</ul>
		</div>
	);
};



export default List;
