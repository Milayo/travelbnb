import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from './pages/landingpage/landingpage';
import OverviewPage from "./pages/destinationsoverviewpage/destinationsoverviewpage.jsx";
import DestinationPage from './pages/destinationpage/destinationpage';


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/overview" component={OverviewPage} />
        <Route exact path="/destination/:id" component={DestinationPage} />
      </Switch>
    </div>
  );
};


export default App;
