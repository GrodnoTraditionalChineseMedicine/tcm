import React from "react";
import {RenderRoutes} from "../../../router/utils";

function LearnTCM({routes}) {
    return (
        <div>
            Learn TCM
            <RenderRoutes routes={routes}/>
        </div>
    )
}
export default LearnTCM;