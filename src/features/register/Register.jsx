import React from "react";
import NoAccessHeader from "../../utils/NoAccessHeader";
import RegisterContent from "./RegisterContent";

export default function Register() {
  return (
    <div className="h-full p-5 transition-all md:px-20 lg:px-40">
      <NoAccessHeader />
      <RegisterContent />
    </div>
  );
}
