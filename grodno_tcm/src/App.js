import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { GlobalStyled } from "./style";
import { GlobalIconFont } from "./statics/iconfont/iconfont";
import 'antd/dist/antd.css';
import store from "./store";

import Home from "./pages/home";
import HospitalIntro from "./pages/hosintro";
import Header from "./common/header";
import Footer from "./common/footer";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <GlobalStyled/>
          <GlobalIconFont/>
          <BrowserRouter>
            <Header/>
              <Route path="/" exact component={Home}/>
              <Route path="/hospital_intro" exact component={HospitalIntro}/>
            <Footer/>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
