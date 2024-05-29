import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Home1 from "pages/Home1";
import AboutUs from "pages/AboutUs";
import Listing from "pages/Listing";
import SpotDetails from "pages/SpotDetails";
import ContactPage from "pages/ContactPage";
import BookingPage from "pages/BookingPage";
import Deshboard from "pages/Deshboard";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "san", element: <Home/> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Home1/>,
    },
    {
      path: "aboutus",
      element: <AboutUs />,
    },
    {
      path: "spot",
      element: <Listing />,
    },
    {
      path: "/:id",
      element: <SpotDetails/>,
    },
    {
      path: "contactpage",
      element: <ContactPage />,
    },
    {
      path: "/Product/:id",
      element: <BookingPage/>
    },
    {
      path : "deshboard",
      element : <Deshboard/>
    },
  ]);

  return element;
};

export default ProjectRoutes;
