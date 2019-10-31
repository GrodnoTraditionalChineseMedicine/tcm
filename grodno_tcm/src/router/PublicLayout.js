import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";

import Home from "../pages/home";
import HospitalIntro from "../pages/hosintro";
import CenterIntro from "../pages/cenintro";
import LearnTcm from "../pages/learntcm";
import RichEditor from "../pages/richeditor";
import Pediatric from "../pages/pediatric";

function PublicLayout(props) {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/hospital_intro" exact component={HospitalIntro}/>
                <Route path="/center_intro" exact component={CenterIntro}/>
                <Route path="/learn_tcm" exact component={LearnTcm}/>
                <Route path="/rich_editor" exact component={RichEditor}/>
                <Route path="/pediatric" exact component={Pediatric}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default PublicLayout;