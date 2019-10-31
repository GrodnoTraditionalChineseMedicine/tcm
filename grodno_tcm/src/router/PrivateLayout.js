import React from "react";

import {RenderRoutes} from "./utils";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { main as mainConfig } from './index';

function PrivateLayout(props) {
    return (
        <div>
            <Switch>
                <RenderRoutes routes={mainConfig}/>
            </Switch>
        </div>
    );
}

export default PrivateLayout;