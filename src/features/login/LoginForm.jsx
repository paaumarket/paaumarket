import { Form, Link, redirect, useNavigation } from "react-router-dom";
import MyInput from "../../utils/MyInput";
import toast, { Toaster } from "react-hot-toast";

export default function LoginForm() {
  const navigation = useNavigation();

  return (
    <Form
      method="POST"
      action="/login"
      className="my-5 rounded-md border-[0.042px] border-gray-200 px-8 py-10 "
    >
      <div>
        <Toaster />
      </div>

      <h1 className="pb-5 text-2xl font-bold text-gray-700">Welcome back!</h1>
      <div className="mb-6">
        <MyInput type="email" placeholder="Enter email address" name="email" />
      </div>

      <div className="mb-6">
        <MyInput type="password" placeholder="Enter password" name="password" />
      </div>

      {/* Button to submit form */}
      <div>
        <LoginButton></LoginButton>
      </div>

      <p className="py-5 text-center">
        I don't have an account {""}
        <Link to="/register" className="text-jade-500 underline">
          Sign Up
        </Link>{" "}
        here!
      </p>
    </Form>
  );
}

function LoginButton() {
  return (
    <input
      type="submit"
      value={"Login"}
      className="w-full cursor-pointer rounded-md bg-jade-500 p-5 text-sm font-extrabold text-white"
    />
  );
}
