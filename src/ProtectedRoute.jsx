import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";
import { Route } from "react-router-dom";


const ProtectedRoute = ({ component: Component, currentUser }) => {
  return (
    <Route
      render={(props) =>
        currentUser ? (
          <Component {...props} />
        ) : (
          <div
              className="d-flex justify-content-center"
              size="lg"
           style={{marginTop: "250px"}}
          >
            <MDBSpinner grow />
          </div>
        )
      }
    />
  );
};

export default ProtectedRoute;
