import React from "react";
import { NavLink } from "react-router-dom";
const AsideEgresados = () => {
	return (
		<div>
			<li>
				<NavLink to='/egresados' activeClassName='selected'>
					Egresados
				</NavLink>
			</li>
		</div>
	);
};

export default AsideEgresados;
