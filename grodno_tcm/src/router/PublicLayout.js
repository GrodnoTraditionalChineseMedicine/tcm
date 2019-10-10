import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";

import Home from "../pages/home";
import HospitalIntro from "../pages/hosintro";
import CenterIntro from "../pages/cenintro";
import LearnTcm from "../pages/learntcm";

function PublicLayout(props) {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/hospital_intro" exact component={HospitalIntro}/>
                <Route path="/center_intro" exact component={CenterIntro}/>
                <Route path="/learn_tcm" exact component={LearnTcm}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default PublicLayout;