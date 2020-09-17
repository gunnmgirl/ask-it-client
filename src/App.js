import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import history from "./routing/history";
import Entry from "./features/auth/components/Entry";
import SignUp from "./features/auth/components/SignUp";
import LogIn from "./features/auth/components/LogIn";
import Latest from "./features/questions/components/Latest";
import Popular from "./features/user/components/Popular";
import Profile from "./features/user/components/Profile";
import Hot from "./features/questions/components/Hot";
import MyQuestions from "./features/questions/components/MyQuestions";
import QuestionDetails from "./features/questions/components/QuestionDetails";

import themes from "./themes";
import GlobalStyle from "./GlobalStyle";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const currentTheme = useSelector((state) => state.theme.theme);
  const theme = currentTheme === "dark" ? themes.dark : themes.light;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router history={history}>
        {isLoggedIn ? (
          <Switch>
            <Route path="/profile/:userId" component={Profile} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/hot" component={Hot} />
            <Route path="/popular" component={Popular} />
            <Route path="/myQuestions" component={MyQuestions} />
            <Route path="/:questionId" component={QuestionDetails} />
            <Route path="/" exact component={Latest} />
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
