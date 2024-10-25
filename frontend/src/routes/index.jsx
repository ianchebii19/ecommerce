import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login"; // Ensure this component exists

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // This makes Home the default child route for "/"
        element: <Home />,
      },
      {
        path: "login", // Path should not include a forward slash
        element: <Login />,
      },
    ],
  },
]);

export default router;
