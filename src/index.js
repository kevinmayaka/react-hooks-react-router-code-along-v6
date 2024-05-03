import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import NavBar from "../components/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/profile/:id",
    element: <UserProfile />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);