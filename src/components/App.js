import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import AboutPage from './AboutPage';

import './App.scss';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - Parcel Example" defaultTitle="It works!">
        <meta charSet="utf-8" />
      </Helmet>
      <div>
        <Link to="/">Hello world</Link> - <Link to="/about">About</Link>
      </div>
      <Switch>
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}
