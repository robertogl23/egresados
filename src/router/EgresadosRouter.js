import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AsideEgresados from "../components/AsideEgresados/AsideEgresados";
import EgresadosMain from "../pages/egresadosPages/EgresadosMain";
import EgresadosMain2 from "../pages/egresadosPages/EgresadosMain2";
import PerfilEgresados from "../pages/egresadosPages/PerfilEgresados";
import UbicacionEgresados from "../pages/egresadosPages/UbicacionEgresados";
import ImprimirPdf from "../pages/ImprimirPdf";
const EgresadosRouter = () => {
	return (
		<div className="egresados-router">
			<AsideEgresados />
			<section className="section-egresados">
				<Switch>
					<Route
						exact
						path='/egresados'
						component={EgresadosMain2}
					/>
					<Route
						
						path='/egresados/ubicacion-egresados'
						component={UbicacionEgresados}
					/>
					<Route
						exact
						path='/egresados/perfil-egresados'
						component={PerfilEgresados}
					/>
					<Route
						exact
						path='/egresados/imprimir'
						component={ImprimirPdf}
					/>
					<Redirect exact to="/egresados"/>
				</Switch>
			</section>
		</div>
	);
};

export default EgresadosRouter;
