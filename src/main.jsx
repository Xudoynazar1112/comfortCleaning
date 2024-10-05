import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import './i18n.jsx'
import "./index.css";
import Loader from "./Loader.jsx";

const App = React.lazy(() => import('./App.jsx'))

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
);
