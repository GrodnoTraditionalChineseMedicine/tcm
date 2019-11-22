import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";

import Home from "../pages/home";
import HospitalIntro from "../pages/hosintro";
import CenterIntro from "../pages/cenintro";
import LearnTcm from "../pages/learntcm";
import RichEditor from "../manage/containers/addArticle";
import Pediatric from "../pages/pediatric";
import ContactUs from "../pages/contact";
import PrivacyPolicy from "../pages/privicy";
import ArticleDetail from "../pages/article";

function PublicLayout(props) {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/hospital_intro" exact component={HospitalIntro}/>
                <Route path="/center_intro" exact component={CenterIntro}/>
                <Route path="/learn_tcm" exact component={LearnTcm}/>
                <Route path="/pediatric" exact component={Pediatric}/>
                <Route path="/contact" exact component={ContactUs}/>
                <Route path="/privacy" exact component={PrivacyPolicy}/>
                <Route path="/article/detail/:id" exact component={ArticleDetail}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default PublicLayout;