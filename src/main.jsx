import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import ReactDOM from "react-dom/client";

import "./index.css";
import Home from "./pages/Home";
import Browse from "./pages/Browse";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Details from "./pages/Details";
import Streams from "./pages/Streams";
import Profile from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/details" element={<Details />} />
      <Route path="/streams" element={<Streams />} />
      <Route path="/profile" element={<Profile />} />
      {/* ... etc. */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
