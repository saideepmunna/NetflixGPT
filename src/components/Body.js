import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import GPTSearch from "./GPTSearch";
import Header from "./Header";

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
          <GPTSearch />
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
