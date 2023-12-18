import { Form } from "react-router-dom";

export function Sale({ index, description, price, createdAt, thumbnail }) {
  return (
    <tr className="grid max-h-[100px] grid-cols-[auto_100px_1fr] items-center gap-4">
      <td>{index + 1}</td>
      <td>
        <img
          src={thumbnail}
          alt="Product"
          className="max-h-[100px] max-w-[100px] rounded-lg object-cover"
        />
      </td>
      <td>
        <table>
          <tbody>
            <tr className="flex flex-col max-sm:text-sm sm:flex-row sm:space-x-6 lg:space-x-20">
              <td className="font-bold text-jade-800 sm:text-sm">
                {description}
              </td>
              <td className="text-sm  text-jade-800 sm:text-base">N{price}</td>

              <td className="text-sm  text-jade-800 sm:text-base">
                {createdAt}
              </td>

              <td>
                <Form method="post" className="inline-block">
                  <input
                    type="button"
                    value="Edit "
                    className=" 400 cursor-pointer text-gray-200 hover:text-gray-300"
                  />
                </Form>{" "}
                <span className="text-jade-800">/</span>{" "}
                <Form method="post" className="inline-block">
                  <input
                    type="button"
                    value="Delete"
                    className="cursor-pointer text-pink-500 hover:text-pink-400"
                  />
                </Form>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
