import { createBrowserRouter } from "react-router";
import PublicLayout from "../components/layouts/PublicLayout";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: `/project-datails/:id`,
        element: <ProjectDetails/>
      }
    ]
  },
]);