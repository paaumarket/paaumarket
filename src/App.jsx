import { Fragment, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//Importing all the parent components
import ErrorBoundary from "./errors/ErrorBondary";
import NotFound from "./errors/PageNotFound";
import Waitlist from "./waitlist/Waitlist";
import Register from "./features/register/Register";
import { submitAction } from "./features/register/RegisterForm";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" errorElement={<ErrorBoundary />}>
      <Route index element={<Waitlist />} />
      <Route path="register" action={submitAction} element={<Register />} />
    </Route>,
    <Route path="*" element={<NotFound />}></Route>,
  ]),
);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
