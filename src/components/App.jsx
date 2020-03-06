import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Game from "./Game";
import Header from "./Header";
import Home from "./Home";
import LoginForm from "./LoginForm";

import { AppWrapper, CenterContainer } from "./styles";

const App = React.memo(() => {
  return (
    <AppWrapper>
      <Router>
        <Header />
        <CenterContainer style={{marginTop: "20px"}}>
          <Switch>
            {/* <Route component={LoginForm} exact path="/login" /> */}
            {/* <PrivateRoute component={Game} path="/game/:id" /> */}
            <Route component={Game} />
            {/* <PrivateRoute component={Home} path="/home" /> */}
          </Switch>
        </CenterContainer>
      </Router>
    </AppWrapper>
  );
});

export default App;
