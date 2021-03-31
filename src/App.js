import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Comics from './components/comics/Comics';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/comics">
          <Comics />
        </Route>
        <Redirect exact from="/" to="/comics" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
