import { useState } from "react";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { Icon } from "@iconify/react";
import toast, { Toaster } from "react-hot-toast";
import MyInput from "../../utils/MyInput";
import MyButton from "../../utils/MyButton";
import { useFetch } from "../../../services/useFetch";

export const submitAction = async function ({ request }) {
  try {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");
    const mobilePhoneNumber = form.get("mobilePhoneNumber");
    const buyer = form.get("buyer");
    const seller = form.get("seller");

    let whois;

    if (typeof buyer !== null && seller === null) {
      whois = "buyer";
    }

    if (typeof seller !== null && buyer == null) {
      whois = "seller";
    }

    const response = await useFetch("post", "/user/register", {
      email,
      password,
      mobilePhoneNumber,
      whois,
    });

    const {
      data: { message },
      status,
    } = response;

    if (status >= 200 && status <= 299) {
      toast.success(message);
      return redirect("/login");
    } else {
      toast.error(message);
    }

    return null;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export default function RegisterForm() {
  const navigation = useNavigation();

  return (
    <Form
      method="POST"
      action="/register"
      className="my-5 rounded-md border-[0.042px] border-gray-200 px-8 py-10 "
    >
      <div>
        <Toaster />
      </div>

      <h1 className="pb-5 text-2xl font-bold text-gray-700">Become a user</h1>
      <div className="mb-6">
        <MyInput type="email" placeholder="Enter email address" name="email" />
      </div>

      <div className="mb-6">
        <MyInput
          type="password"
          placeholder="Create a password"
          name="password"
        />
      </div>

      <div className="mb-6">
        <MyInput
          type="number"
          placeholder="Enter mobile phone number"
          name="mobilePhoneNumber"
        />
      </div>

      {/* Checkbox to agree for term and conditions */}
      <div className="mb-6 flex justify-start">
        <Icon
          icon="streamline:padlock-square-1-solid"
          className="mr-2 inline-block text-4xl text-neutral-600"
        />
        <p className="text-sm">
          By signing up, you agree to our{" "}
          <Link to="#" className="text-jade-500 underline">
            Terms and Conditions
          </Link>{" "}
          and confirm that you have read and understand the{" "}
          <Link to="#" className="text-jade-500 underline">
            Privacy Policy
          </Link>
        </p>
      </div>

      {/* Button to submit form */}
      <div className="flex flex-col justify-around space-y-4 md:flex-row md:space-y-0">
        <MyButton value={"Sign Up as a Buyer"} name="buyer" />
        <MyButton
          value={"Sign Up as a Seller"}
          bgColor={"bg-black"}
          name="seller"
        />
      </div>

      <p className="py-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-jade-500 underline">
          Login
        </Link>
      </p>
    </Form>
  );
}
