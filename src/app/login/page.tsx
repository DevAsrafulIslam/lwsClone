import { Button } from "@mantine/core";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="container grid grid-cols-1 md:grid md:grid-cols-2 mx-auto items-center gap-8 py-10 lg:py-20">
      <Image
        className="animate__animated animate__bounceInUp"
        src="/svg/login.png"
        width={500}
        height={100}
        alt=""
      />
      <div className="space-y-6">
        <div className="text-center ">
          <h1 className="text-4xl font-bold">
            <span className="text-[#6d28d9]">লগইন</span> করুন
          </h1>
          <p className="text-2xl">আপনার লগইন তথ্য কারো সাথে শেয়ার করবেন না</p>
        </div>
        <div className="space-y-8">
          <div>
            <label htmlFor="">
              <h4 className="text-lg font-bold">
                আপনার ইমেইল এড্রেস <span className="text-red-600">*</span>
              </h4>{" "}
              <p className="text-sm">
                যে ইমেইল এড্রেস দিয়ে আপনি নিবন্ধন করেছিলেন।
              </p>{" "}
            </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="boss@gmail.com"
              className="focus:border focus:border-cyan-400 border mt-2 border-slate-400 outline-none rounded-sm px-4 py-1 w-full "
            />
          </div>
          <div>
            <label htmlFor="">
              <h4 className="text-lg font-bold">
                পাসওয়ার্ড দিন <span className="text-red-600">*</span>
              </h4>{" "}
              <p className="text-sm">
                পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং সেখানে কমপক্ষে 1 টি
                লেটার এবং 1 টি নাম্বার থাকতেই হবে।
              </p>{" "}
            </label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="anyPassword"
              className="focus:border focus:border-cyan-400 border mt-2 border-slate-400 outline-none rounded-sm  px-4 py-1 w-full "
            />
          </div>
          <div className="flex justify-between">
            <button className="bg-slate-800 text-white w-fit px-4 py-2 rounded-2xl">
              লগইন করুন
            </button>
            <button className=" text-[#6d28d9] w-fit px-4 py-2 rounded-2xl">
              পাসওয়ার্ড ভুলে গেছেন?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
