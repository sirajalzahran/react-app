import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ChallengeOne from "./Components/challenges/challengeOne/ChallengeOne";
import Article from "./Components/article/Article";
import MyFirstComponent from "./Components/FirstComponent/MyFirstComponent";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/ChallengeOne",
        element: <ChallengeOne></ChallengeOne>,
      },
      {
        path: "/article",
        element: <Article></Article>,
      },
      {
        path: "/component1",
        element: <MyFirstComponent></MyFirstComponent>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
