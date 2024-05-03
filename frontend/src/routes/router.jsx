import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SubmitPaper from "../pages/SubmitPaper";
import Graph from "../pages/Graph";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Page not found</p>,
    children: [
      {
        path: "/",
        element: <div>Hello World!</div>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/graph",
        element: <Graph />
      },
      {
        path: "/submit-paper",
        element: <SubmitPaper></SubmitPaper>,
      },
    ],
  },
]);

export default router;
