import React from "react";
import {Route, Switch, Link} from "react-router-dom";

import RichEditor from "../pages/richeditor";
import Login from "../manage/login";

function PrivateLayout(props) {
    return (
        <div>
            <Switch>
                <Route path="/manage/rich_editor" exact component={RichEditor}/>
                <Route path="/manage/login" exact component={Login}/>
            </Switch>
            {/*<Link to="/">首页</Link>*/}
        </div>
    );
}

export default PrivateLayout;