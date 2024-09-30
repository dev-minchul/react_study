import { createBrowserRouter } from "react-router-dom";
import Intro from "../pages/home/intro/Intro";
import Job from "../pages/home/intro/Job";
import Main from "../pages/home/main/Main";
import Layout from "../pages/layout/Layout";
import NotFound from "../pages/notFound/NotFound";
import My from "../pages/my/My";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <Main />
      },
      {
        path : "/intro",
        element : <Intro />
      },
      {
        path : "/my",
        element:<My />
      },
      {
        path : "/job",
        element : <Job />,
        children : [
          {
            path : ":title",
            element : <Job />
          }
        ]
      },
    ]
  },
  {
    path : "*",
    element : <NotFound/>
  }
])


export default router;