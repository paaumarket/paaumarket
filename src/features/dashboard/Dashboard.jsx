import React from "react";
import logo from "../../assets/logo.png";
import product from "../../assets/product.png";
import Profile from "./Profile";
import SellProduct from "./SellProduct";
import SaleList from "./sale/SaleList";
import profilePicture from "../../assets/johndoe.jpg";

const user = {
  _id: 32,
  profilePicture: profilePicture,
  surname: "Doe",
  othername: "John",
  username: "johnd",
  email: "johndoe@mail.com",
  mobilePhoneNumber: "+1 98384354",
  is_paid: false,
  whois: "buyer",
  trials_day: 0,
  products: [
    /* {
      _id: 1,
      description: "Apple iPhone X 64 GB White",
      price: "35000",
      createdAt: "15th Dec, 2023",
      thumbnail: product,
    }, */
  ],
};

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

      <Profile {...user} />

      <SellProduct
        is_paid={user.is_paid}
        whois={user.whois}
        trials_day={user.trials_day}
      />

      <SaleList products={user.products} />
    </section>
  );
}
