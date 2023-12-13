import React from "react";
import NoAccessHeader from "../../utils/NoAccessHeader";
import LoginContent from "./LoginContent";

export default function Login() {
  return (
    <div className="h-full p-5 transition-all md:px-20 lg:px-40">
      <NoAccessHeader type={"Sign Up"} route={"/register"} />
      <LoginContent />
    </div>
  );
}
