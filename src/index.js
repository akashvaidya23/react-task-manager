import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTask from "./Components/CreateTask/CreateTask";
import Root from "./Components/Routes/Root";
import ListTask from "./Components/ListTask/ListTask";
import EditTask from "./Components/EditTask/EditTask";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/newTask",
        element: <CreateTask />,
      },
      {
        path: "/",
        element: <ListTask />,
      },
      {
        path: "task/:taskId",
        element: <EditTask />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
