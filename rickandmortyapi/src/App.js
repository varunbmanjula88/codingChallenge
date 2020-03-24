import React, { Component } from "react";
import Alert from "react-s-alert";
import HeaderComponent from "./components/headerComponent";
import homeComponent from "./components/homeComponent";
import characterDetailComponent from "./components/characterDetailsComponent";
import notFoundComponent from "./components/notFoundComponent";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import SearchBarComponent from "./components/searchBarComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <BrowserRouter>
          <React.Fragment>
            <Alert
              stack={{ limit: 1 }}
              effect="scale"
              beep={false}
              position="bottom-right"
              timeout={3000}
              html={true}
            />
            <React.Fragment>
              <HeaderComponent />
              {/* <SearchBarComponent /> */}
              <Switch>
                <Route exact path="/" component={homeComponent} />
                <Route
                  path="/character/:id"
                  component={characterDetailComponent}
                />
                <Route path="*" exact={true} component={notFoundComponent} />
              </Switch>
            </React.Fragment>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
