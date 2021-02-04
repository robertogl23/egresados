import React from "react";
import { NavLink } from "react-router-dom";
const AsideEgresados = () => {
	return (
		<div>
			<li>
				<NavLink to='/egresados/sastifaccion' activeClassName='selected'>
                sastifaccion
				</NavLink>
			</li>
		</div>
	);
};

export default AsideEgresados;
