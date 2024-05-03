import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";

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
        element: <h1>register</h1>,
      },
      {
        path: "/login",
        element: <h1>Login</h1>,
      },
      {
        path: "/knowledge-graph",
        element: <h1>Knowledge Graph</h1>,
      },
    ],
  },
]);

export default router;
