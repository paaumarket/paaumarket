import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/johndoe.jpg";
import product from "../../assets/product.png";
import { Form, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute -top-4 right-full -mr-14 hidden w-1/2 origin-top-right rotate-12 xl:block">
        <div className="aspect-w-4 aspect-h-5">
          <div>
            <div
              className="absolute -right-1/4 left-[-200%] top-0 h-px opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(148, 163, 184, 0) 33%, rgb(148, 163, 184) 80%, rgba(148, 163, 184, 0) 100%)",
              }}
            ></div>
            <div
              className="absolute -bottom-1/3 right-0 top-[-125%] w-px opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(closest-corner at 50% 66%, rgb(148, 163, 184), rgba(148, 163, 184, 0))",
              }}
            ></div>
            <div
              className="absolute -right-1/2 bottom-0 left-[-200%] h-px opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(148, 163, 184, 0) 33%, rgb(148, 163, 184) 80%, rgba(148, 163, 184, 0) 100%)",
              }}
            ></div>
            <div
              className="absolute -bottom-1/2 left-0 top-[-100%] w-px opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(closest-corner at 50% 66%, rgb(148, 163, 184), rgba(148, 163, 184, 0))",
              }}
            ></div>
            <div className="absolute left-0 top-[-0.5px] h-[2px] w-28 -translate-x-1/3 rounded-full bg-gradient-to-r from-jade-500"></div>
            <div className="absolute bottom-[-0.5px] right-0 h-[2px] w-28 translate-x-4 rounded-full bg-gradient-to-l from-jade-400"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="hidden p-10 transition-all sm:block md:px-20 lg:px-40">
          <img
            src={logo}
            alt="Paau market logo"
            className="w-40 sm:inline-block"
          />
        </div>
      </div>

      <article className="w-full transition-all sm:p-10 md:flex md:bg-[#FBFFFD] md:px-20 lg:px-40">
        <img
          src={user}
          alt="User Profile"
          className="rounded-b-xl object-cover sm:h-28 sm:w-28 sm:rounded-full"
        />

        <div className="w-full items-center p-10 sm:p-0 md:flex">
          <div className="py-3 md:px-10">
            <h1 className="text-xl font-bold text-jade-800">John Doe</h1>
            <h6 className="font-medium text-jade-500">@johnd</h6>
          </div>
          <div className="py-3 text-gray-500 md:px-10">
            <p>johndoe@mail.com</p>
            <p>+1 98384354</p>
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

      <article className="p-10 pt-0 transition-all sm:block sm:p-10 md:px-20 lg:px-40">
        <div className="pb-5">
          <h2 className="text-lg font-bold text-jade-800">Sell Product</h2>
          <p className="text-gray-400">Let your customers see your product.</p>
        </div>
        <Form method="post">
          <div className="grid gap-x-4 space-y-5 py-4 sm:space-y-0 md:grid-cols-3 lg:gap-x-10">
            <input
              type="text"
              name="description"
              placeholder="Enter product description"
              className="w-full text-ellipsis rounded-lg bg-gray-100 p-5 text-sm font-bold text-gray-800 outline-jade-100 placeholder:text-gray-300 focus:outline"
            />
            <input
              type="number"
              name="price"
              placeholder="Enter product price"
              className=" w-full text-ellipsis rounded-lg bg-gray-100 p-5 text-sm font-bold text-gray-800 outline-jade-100 placeholder:text-gray-300 focus:outline"
            />
            <input
              type="file"
              name="productPicture"
              className="cursor-pointer text-gray-400 file:rounded-full file:border-0 file:bg-jade-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-jade-700 file:hover:bg-jade-100"
            />
          </div>

          <input
            type="submit"
            value="Post"
            className="w-full  cursor-pointer rounded-full border-0 bg-jade-50 px-20 py-4 font-semibold text-jade-700 outline-0  ring-jade-100 ring-offset-1 hover:bg-jade-100 active:ring md:w-auto"
          />
        </Form>
      </article>

      <article className="p-10 pt-0 transition-all sm:block sm:p-10 md:px-20 lg:px-40">
        <h2 className="text-lg font-bold text-jade-800">Sale List</h2>
        <table className="inline-block py-4 sm:w-full">
          <tbody>
            <tr className="grid max-h-[100px] grid-cols-[auto_100px_1fr] items-center gap-4">
              <td>1</td>
              <td>
                <img
                  src={product}
                  alt="Product"
                  className="max-h-[100px] max-w-[100px] rounded-lg object-cover"
                />
              </td>
              <td>
                <table>
                  <tbody>
                    <tr className="flex flex-col max-sm:text-sm sm:flex-row sm:space-x-6 lg:space-x-20">
                      <td className="font-bold text-jade-800 sm:text-sm">
                        Apple iPhone X 64 GB White
                      </td>
                      <td className="text-sm  text-jade-800 sm:text-base">
                        N35,000
                      </td>

                      <td className="text-sm  text-jade-800 sm:text-base">
                        15th Dec, 2023
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
          </tbody>
        </table>
      </article>
    </section>
  );
}
