import {
    Switch,
    Route
} from "react-router-dom";
import React from "react";

import {LinkProps} from "../elements/WrappedLink";

import {Home} from "../pages/Home/Home";
import {Lab} from "../pages/Lab/Lab";
import {Blog} from "../pages/Blog/Blog";
import {Work} from "../pages/Work/Work";
import {Cook} from "../pages/Cook/Cook";

export const RouteUIConfig: LinkProps[] = [
    { link: "/blog", text: "Log.d" },
    { link: "/work", text: "Work" },
    { link: "/lab", text: "Lab" },
    { link: "/cook", text: "Cook" }
]

const Routes = () => (
    <Switch>
        <Route path="/work">
            <Work />
        </Route>
        <Route path="/lab">
            <Lab />
        </Route>
        <Route path="/blog">
            <Blog />
        </Route>
        <Route path="/cook">
            <Cook />
        </Route>
        <Route path="/">
            <Home prompt="I am " defaultName="Shibasis" />
        </Route>
    </Switch>
);

export default Routes;







