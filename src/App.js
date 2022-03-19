import React, { useEffect, useState } from "react";


import { onAuthStateChanged } from "firebase/auth";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase.utils.js";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";
import LandingPage from "./pages/landingpage/landingpage";
import BookingPage from "./pages/bookings/bookings.jsx";
import OverviewPage from "./pages/destinationsoverviewpage/destinationsoverviewpage.jsx";
import DestinationPage from "./pages/destinationpage/destinationpage";
import SignUp from "./components/signup/signup";
import SignIn from "./components/signin/signin";



const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
 
  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
      console.log(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/overview" component={OverviewPage} />
        <Route
          exact
          path="/destination/:id"
          component={DestinationPage}
          currentUser={currentUser}
        />
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
        
          <ProtectedRoute
            exact
            path="/booking"
            component={BookingPage}
            currentUser={currentUser}
          />
       
      </Switch>
    </div>
  );
};

export default App;
