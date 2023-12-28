import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./Header";
import NetflixGPT from "./NetflixGPT";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Login />
        </>
      ),
    },
    {
      path: "/browse",
      element: (
        <>
          <Header />
          <Browse />
        </>
      ),
    },
    {
      path: "/recommendations",
      element: (
        <>
          <Header />
          <NetflixGPT />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
