import { Fragment } from "react";
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
import Login from "./features/login/Login";
import { loginAction } from "./features/login/LoginForm";
import Dashboard from "./features/dashboard/Dashboard";
import EditProfile from "./features/dashboard/profile/EditProfile";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" errorElement={<ErrorBoundary />}>
      <Route index element={<Waitlist />} />
      <Route path="register" action={submitAction} element={<Register />} />
      <Route path="/login" action={loginAction} element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="edit/:id" element={<EditProfile />}></Route>
      </Route>
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
