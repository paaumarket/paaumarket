import { useState } from "react";
import { Icon } from "@iconify/react";
import toast, { Toaster } from "react-hot-toast";

import { useFetch } from "../../../../services/useFetch";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");

  const onEmailChanged = function (ev) {
    const value = ev.target.value;
    setEmail(value);
  };

  const saveHandler = async function (ev) {
    ev.preventDefault();

    const {
      data: { message },
      status,
    } = await useFetch("post", "/waitlist", { email });

    if (status >= 200 && status <= 299) {
      toast.success(message);
    } else {
      toast.error(message);
    }

    setEmail("");
  };

  return (
    <form method="post" className="py-4">
      <div>
        <Toaster />
      </div>
      <div>
        <input
          type="email"
          name=""
          id="email"
          placeholder="example@mail.com"
          className="peer w-full rounded-md border-[0.5px] px-5 py-2 font-bold text-gray-500 outline-none ring-jade-50 focus:ring-1"
          value={email}
          onChange={(ev) => onEmailChanged(ev)}
        />

        <p className="invisible my-1 text-pink-500  peer-invalid:visible">
          Please enter valid email address.
        </p>
      </div>

      <div
        className="group flex w-full cursor-pointer justify-between rounded-md bg-jade-500 px-5 py-2 text-left font-bold text-white ring-jade-100 ring-offset-2 active:ring-2"
        onClick={(ev) => saveHandler(ev)}
      >
        <input type="submit" value="Save" id="saveButton" />
        <Icon
          icon="tabler:arrow-right"
          className="right-0 text-3xl text-white transition-all group-hover:translate-x-2"
        />
      </div>
    </form>
  );
}
