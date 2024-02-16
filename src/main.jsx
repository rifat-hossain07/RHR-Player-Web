import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
// import './index.css'
// Import our custom CSS
import "../src/scss/styles.scss";
import router from "./Routes";
// index.tsx or main.tsx
// import "bootstrap/dist/css/bootstrap.min.css";

// Import all of Bootstrap's JS
// import * as bootstrap from "bootstrap";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
