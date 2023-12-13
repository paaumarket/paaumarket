import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";

export default function RegisterContent() {
  return (
    <section className="grid h-[80%] md:grid-cols-2">
      <div className="hidden self-center md:block">
        <h1 className="text-6xl font-extrabold">
          <b>
            Shop <span className="text-jade-500">smarter</span>
            <br /> Sign up <span className="text-jade-500">faster!</span>
          </b>
        </h1>

        <p className="py-5 text-gray-400">
          Sign up and stay in the loop for the latest <br /> arrivals, sales,
          and surprises.
        </p>
      </div>

      <RegisterForm />
    </section>
  );
}
