import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./App";
import { Provider } from "react-redux";

import { store, persistor } from "./redux/store.js";

const stripePromise = loadStripe(
  "pk_test_51JWk4tDr7FJ4ewEpe7AQTlUP9hzi1y0ZtTX6pSdW1G1VvTpY927cMjeWEVwUm3HZygGb7sOdD5xEFm9HEkVYtMGd00be4pjmzD"
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <Elements stripe={stripePromise}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Elements>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
