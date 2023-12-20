import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="container flex mx-auto items-center gap-8 ">
      <Image src="/svg/login.png" width={600} height={100} alt="" />
      <div>
        <div className="text-center ">
          <h1 className="text-4xl font-bold">
            <span className="text-[#6d28d9]">লগইন</span> করুন
          </h1>
          <p className="text-2xl">আপনার লগইন তথ্য কারো সাথে শেয়ার করবেন না</p>
        </div>
        <div>
          <label htmlFor="">
            <h4>
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
            className="border-cyan-400 border px-4 py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="">
            <h4>
              পাসওয়ার্ড দিন <span className="text-red-600">*</span>
            </h4>{" "}
            <p className="text-sm">
              পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং সেখানে কমপক্ষে 1 টি লেটার
              এবং 1 টি নাম্বার থাকতেই হবে।
            </p>{" "}
          </label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="anyPassword"
            className="border-cyan-400 border px-4 py-1 w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
