import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from '../components/header/Header';
import Home from '../pages/Home';
import HomeEmpleadores from '../pages/HomeEmpleadores';
//import HomeEmpleadores from '../pages/HomeEmpleadores';
import EgresadosRouter from './EgresadosRouter';
const AppRouter = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route  exact path="/" component={Home}/>
                <Route   path="/egresados" component={EgresadosRouter}/>
                <Route path="/empleadores" component={HomeEmpleadores}/>
            </Switch>
        </Router >
    )
}

export default AppRouter
