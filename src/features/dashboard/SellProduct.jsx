import { Form } from "react-router-dom";
import { Input, InputFile, InputSubmit, InputButton } from "../utils/input";

export default function SellProduct({ is_paid, whois, trials_day }) {
  const isSeller = whois !== "seller";
  const isDisabled = !((!isSeller && trials_day > 0) || is_paid);

  return (
    <article className="p-10 pt-0 transition-all sm:block sm:p-10 md:px-20 lg:px-40">
      <div className="pb-5">
        <h2 className="text-lg font-bold text-jade-800">Sell Product</h2>
        <p className="text-gray-400">Let your customers see your product.</p>
      </div>
      <main className="min-h-[150px]">
        {isSeller ? (
          <InputButton value="I want to be a seller." />
        ) : (
          <Form method="post">
            <div className="grid gap-x-4 space-y-5 py-4 md:grid-cols-3 md:space-y-0 lg:gap-x-10">
              <Input
                type="text"
                name="description"
                disabled={isDisabled}
                placeholder="Enter product description"
              />
              <Input
                type="number"
                name="price"
                placeholder="Enter product price"
                disabled={isDisabled}
              />
              <InputFile disabled={isDisabled} />
            </div>

            <InputSubmit value="Post" disabled={isDisabled} />
          </Form>
        )}
      </main>
    </article>
  );
}
