import { Fragment } from "react";
// Page Not Found Error
function NotFound() {
  return (
    <Fragment>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center">
        <h1 className="text-lg font-bold italic">404</h1>
        <h4 className="text-neutral-500">Oops, something went wrong!</h4>
        <p className="italic text-jade-500">Page Not Found</p>
      </div>
    </Fragment>
  );
}

export default NotFound;
