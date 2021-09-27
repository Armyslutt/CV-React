import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import App from '../containers/App';
import Sidebar from '../components/sidebar/sidebar';
import Error404 from '../components/error404/error404';
import Perfil from '../components/perfil/perfil';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/curriculum" component={Sidebar} />
                <Route exact path="/curriculum/perfil" component={Perfil} />
                <Route exact path="*" component={Error404} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;