export function Input(props) {
  return (
    <input
      {...props}
      className="w-full text-ellipsis rounded-lg bg-gray-100 p-5 text-sm font-bold text-gray-800 outline-jade-100 placeholder:text-gray-300 focus:outline"
    />
  );
}

export const InputFile = function (props) {
  return (
    <input
      {...props}
      type="file"
      name="productPicture"
      className="cursor-pointer text-gray-400 file:rounded-full file:border-0 file:bg-jade-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-jade-700 file:hover:bg-jade-100 disabled:cursor-not-allowed"
    />
  );
};

export const InputSubmit = function (props) {
  return (
    <input
      type="submit"
      {...props}
      className="w-full  cursor-pointer rounded-full border-0 bg-jade-50 px-20 py-4 font-semibold text-jade-700 outline-0  ring-jade-100 ring-offset-1 hover:bg-jade-100 active:ring disabled:cursor-not-allowed disabled:opacity-25 disabled:ring-0 md:w-auto"
    />
  );
};

export const InputButton = function (props) {
  return (
    <input
      type="button"
      {...props}
      className="w-full  cursor-pointer rounded-full border-0 bg-jade-50 py-4 font-semibold text-jade-700 outline-0 ring-jade-100  ring-offset-1 hover:bg-jade-100 active:ring sm:px-20 md:w-auto"
    />
  );
};
