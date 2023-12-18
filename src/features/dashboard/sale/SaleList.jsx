import { Sale } from "./Sale";

export default function SaleList({ products }) {
  let list;
  if (!products.length) {
    list = (
      <tr>
        <td className="inline-block w-full text-center text-gray-400">
          No Sale
        </td>
      </tr>
    );
  } else {
    list = products.map((sale, index) => {
      return <Sale key={sale._id} {...sale} index={index} />;
    });
  }

  return (
    <article className="p-10 pt-0 transition-all sm:block sm:p-10 md:px-20 lg:px-40">
      <h2 className="text-lg font-bold text-jade-800">Sale List</h2>
      <table className="inline-block w-full py-4  sm:w-full">
        <tbody className="grid gap-4">{list}</tbody>
      </table>
    </article>
  );
}
