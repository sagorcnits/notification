import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Admin from "../pages/admin/Admin";
import Exam from "../pages/exam/Exam";
import Form from "../pages/form/Form";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/form",
          element: <Form></Form>,
        },
        {
          path: "/exam",
          element: <Exam></Exam>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
  ],

  {
    future: {
      v7_startTransition: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionStatusRevalidation: true,
      v7_fetcherPersist: true,
      v7_skipActionErrorRevalidation: true,
      v7_relativeSplatPath: true,
    },
  }
);

export default router;
