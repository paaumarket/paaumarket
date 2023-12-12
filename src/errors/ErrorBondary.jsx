import { useRouteError } from "react-router-dom";

// Error Message
function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);
  return (
    <Fragment>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center">
        <h1 className="text-lg font-bold italic">Error!</h1>
        <h4 className="text-neutral-500">Oops, something went wrong!</h4>
        <p className="italic text-jade-500">{error.message + "."}</p>
      </div>
    </Fragment>
  );
}

export default ErrorBoundary;
