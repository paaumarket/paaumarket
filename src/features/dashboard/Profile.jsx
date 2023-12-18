import { Form } from "react-router-dom";

export default function Profile({
  profilePicture,
  surname,
  othername,
  email,
  mobilePhoneNumber,
  username,
}) {
  return (
    <article className="w-full transition-all sm:p-10 md:flex md:bg-[#FBFFFD] md:px-20 lg:px-40">
      <img
        src={profilePicture}
        alt="User Profile"
        className="h-96 w-full rounded-b-xl object-cover sm:h-28 sm:w-28 sm:rounded-full"
      />

      <div className="w-full items-center p-10 sm:p-0 md:flex">
        <div className="py-3 md:px-10">
          <h1 className="text-xl font-bold text-jade-800">
            {othername} {surname}
          </h1>
          <h6 className="font-medium text-jade-500">
            {!username || `@${username}`}
          </h6>
        </div>
        <div className="py-3 text-gray-500 md:px-10">
          <p>{email}</p>
          <p>{mobilePhoneNumber}</p>
        </div>
        <Form method="post" className="py-3 md:px-10">
          <input
            type="button"
            value="Edit"
            className="cursor-pointer text-gray-200 hover:text-gray-300"
          />
        </Form>
      </div>
    </article>
  );
}
