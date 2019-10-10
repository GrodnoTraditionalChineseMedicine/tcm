import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { GlobalStyled } from "./style";
import { GlobalIconFont } from "./statics/iconfont/iconfont";
import 'antd/dist/antd.css';
import store from "./store";

import PrivateLayout from "./router/PrivateLayout";
import PublicLayout from "./router/PublicLayout";



class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <GlobalStyled/>
          <GlobalIconFont/>
          <BrowserRouter>
                {/*<Route exact path={["/hospital_intro", "/","/center_intro","/learn_tcm"]}>
                    <Header/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/hospital_intro" exact component={HospitalIntro}/>
                    <Route path="/center_intro" exact component={CenterIntro}/>
                    <Route path="/learn_tcm" exact component={LearnTcm}/>
                    <Footer/>
                </Route>
                <Route exact path={["/rich_editor"]}>
                    <Route path="/rich_editor" exact component={RichEditor}/>
                </Route>*/}
              <Switch>
                  <Route path='/manage' component={PrivateLayout} />
                  <Route path='/' component={PublicLayout} />
              </Switch>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
