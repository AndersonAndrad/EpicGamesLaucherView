import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Main from './modules/main/pages/main.component';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
