import React from "react";
import { Switch, Route } from "react-router-dom";
import AsideEgresados from "../components/AsideEgresados/AsideEgresados";
import EgresadosMain from "../pages/egresadosPages/EgresadosMain";
import SatisfaccionEgresados from "../pages/egresadosPages/SatisfaccionEgresados";
const EgresadosRouter = () => {
	return (
		<div>
            <AsideEgresados/>
			<Switch>
				<Route exact path='/egresados' component={EgresadosMain} />
				<Route exact path='/sastifaccion' component={SatisfaccionEgresados} />
			</Switch>
		</div>
	);
};

export default EgresadosRouter;
