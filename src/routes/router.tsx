import { createBrowserRouter } from "react-router";
import PublicLayout from "../components/layouts/PublicLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout/>,
  },
]);