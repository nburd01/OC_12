import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Root from "./routes/root";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Communeaute from "./routes/communeaute";
import Reglages from "./routes/reglages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "profile/:profileId",
        element: <Profile />,
        // loader: logementLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "communeaute",
        element: <Communeaute />,
        errorElement: <ErrorPage />,
      },
      {
        path: "reglages",
        element: <Reglages />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
