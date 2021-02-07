import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AsideEgresados from "../components/AsideEgresados/AsideEgresados";
import EgresadosMain from "../pages/egresadosPages/EgresadosMain";
import PerfilEgresados from "../pages/egresadosPages/PerfilEgresados";
import SatisfaccionEgresados from "../pages/egresadosPages/SatisfaccionEgresados";
const EgresadosRouter = () => {
	return (
		<div className="egresados-router">
			<AsideEgresados />
			<section className="section-egresados">
				<Switch>
					<Route
						exact
						path='/egresados'
						component={EgresadosMain}
					/>
					<Route
						
						path='/egresados/sastifaccion'
						component={SatisfaccionEgresados}
					/>
					<Route
						exact
						path='/egresados/perfil-egresados'
						component={PerfilEgresados}
					/>
					<Redirect exact to="/egresados"/>
				</Switch>
			</section>
		</div>
	);
};

export default EgresadosRouter;
