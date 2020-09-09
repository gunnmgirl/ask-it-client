import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import history from "./routing/history";
import Entry from "./features/auth/components/Entry";
import SignUp from "./features/auth/components/SignUp";
import LogIn from "./features/auth/components/LogIn";
import Feed from "./features/questions/components/Feed";
import themes from "./themes";
import GlobalStyle from "./GlobalStyle";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <Router history={history}>
        {isLoggedIn ? (
          <Switch>
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" component={Feed} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" exact component={Entry} />
          </Switch>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
