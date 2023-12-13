import LoginForm from "./LoginForm";
export default function LoginContent() {
  return (
    <section className="grid h-[80%] md:grid-cols-2">
      <div className="hidden self-center md:block">
        <h1 className="text-6xl font-extrabold">
          <b>
            Your journey begins with a{" "}
            <span className="text-jade-500"> simple login!</span>
          </b>
        </h1>

        <p className="py-5 text-gray-400">
          Unlocking possibilities, one login at a time.
        </p>
      </div>

      <LoginForm />
    </section>
  );
}
