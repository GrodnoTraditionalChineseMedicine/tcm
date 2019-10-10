import React from "react";
import {Route, Switch, Link} from "react-router-dom";

import RichEditor from "../pages/richeditor";

function PrivateLayout(props) {
    return (
        <div>
            <Switch>
                <Route path="/manage/rich_editor" exact component={RichEditor}/>
            </Switch>
            <Link to="/">首页</Link>
        </div>
    );
}

export default PrivateLayout;