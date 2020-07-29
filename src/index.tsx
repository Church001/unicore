import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store";
import FallbackUI from "./UI/fallback/FallbackUI";
import ErrorBoundary from "./wrappers/errorBoundary/ErrorBoundaryWrapper";

const Dashboard = React.lazy(() => import("./containers/dashboard/Dashboard"));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={FallbackUI}>
        <ErrorBoundary>
          <Dashboard />
        </ErrorBoundary>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
