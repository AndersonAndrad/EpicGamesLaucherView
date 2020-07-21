import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Main from './modules/main/pages/main.component';
import AboutGame from './modules/about-game/about-game.component';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/games/:id" component={AboutGame} />
      </Switch>
    </BrowserRouter>
  );
}
