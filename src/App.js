import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/comics">
          <h1>Marvel</h1>
        </Route>
        <Redirect exact from="/" to="/comics" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
