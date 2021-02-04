import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import EgresadosMain from "../pages/EgresadosMain";
const EgresadosRouter = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/egresados' component={EgresadosMain} />
				<Redirect exact to='/egresados' />
			</Switch>
		</div>
	);
};

export default EgresadosRouter;
