import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LandingPage from "./assets/landingPage/landingPage"
import Login from "./pages/login";
import Register from "./pages/register";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
    {
      path: "/login",
      element: <Login />
    },

    {
      path: "/register",
      element: <Register />
    }
]);

function App() {
return ( <RouterProvider router={router} /> );

}

export default App
