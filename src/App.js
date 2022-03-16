import React, { useEffect, useState } from 'react';
import { auth } from "./components/firebase/firebase.utils.js";
import { Route, Switch, Redirect} from "react-router-dom";
import LandingPage from './pages/landingpage/landingpage';
import OverviewPage from "./pages/destinationsoverviewpage/destinationsoverviewpage.jsx";
import DestinationPage from './pages/destinationpage/destinationpage';
import SignUp from './components/signup/signup';
import SignIn from './components/signin/signin';


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const unsubscribeFromAuth = null;

  useEffect(
    () => {
const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
  setCurrentUser(user);

  console.log(user);
});
      return () => {
        unsubscribeFromAuth();
      }
    }
  )
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/overview" component={OverviewPage} />
        <Route exact path="/destination/:id" component={DestinationPage} />
        <Route
          exact
          path="/register"
          render={() =>
            currentUser ? <Redirect to="/overview" /> : <SignUp />
          }
        />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/overview" /> : <SignIn />
          }
        />
      </Switch>
    </div>
  );
};


export default App;
