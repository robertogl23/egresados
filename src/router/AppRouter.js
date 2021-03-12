import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from '../components/header/Header';
import Home1 from '../pages/Home1';
import Home from '../pages/Home';
import HomeEmpleadores from '../pages/HomeEmpleadores';
//import HomeEmpleadores from '../pages/HomeEmpleadores';
import EgresadosRouter from './EgresadosRouter';
import Home2 from '../pages/Home2';
import Home3 from '../pages/Home3';
import Home4 from '../pages/Home4';
import Home5 from '../pages/Home5';
const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/egresados" component={EgresadosRouter} />
                <Route  path="/egresados1" component={Home1} />
                <Route  path="/egresados2" component={Home2} />
                <Route path="/egresados3" component={Home3} />
                <Route path="/egresados4" component={Home4} />
                <Route path="/egresados5" component={Home5} />
                <Route path="/empleadores" component={HomeEmpleadores} />
            </Switch>
        </Router >
    )
}

export default AppRouter
