import { Button } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" container grid grid-cols-1 md:grid-cols-2 gap-8  items-center">
      <div className="mt-16 grid grid-cols-1">
        <div className="flex  justify-center md:justify-start gap-3">
          <Image
            src="/icon/react-logo.76432d39.svg"
            width={50}
            height={50}
            alt=""
          />
          <Image
            src="/icon/nextjs-black.1018fed0.svg"
            width={50}
            height={50}
            alt=""
          />
        </div>
        <div className="text-center md:text-start">
          <h4 className="text-xl justify-center mx-auto mt-4 font-bold">
            বাংলা রিয়্যাক্ট-নেক্সট জেএস কোর্স
          </h4>
          <h1 className="text-5xl my-4 font-bold text-[#00000098]">
            <span className=" text-[#07A8ED]">রিয়্যাক্টিভ</span> এক্সিলারেটর
          </h1>
          <p className="font-bold">
            রিয়্যাক্ট জে.এস ভার্সন 18 & নেক্সট জে.এস ভার্সন 14
          </p>
        </div>
        <div>
          <p className="text-1 text-medium mt-10 text-center lg:text-left">
            রিয়্যাক্ট এবং নেক্সট জে.এস-এর মৌলিক ও আবশ্যিক বিষয়সমূহ বুঝার
            পাশাপাশি এই কোর্সের প্রজেক্ট ভিত্তিক শেখানোর পদ্ধতি আপনাকে একজন দক্ষ
            রিয়্যাক্ট ফ্রন্ট-এন্ড ডেভেলপার হয়ে উঠতে সাহায্য করবে বলে আমাদের
            বিশ্বাস।
          </p>
        </div>
        <div>
          <div className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:mx-0 justify-center">
            <div className="grid grid-cols-1 mx-auto justify-center">
              <Button className="divide-x  bg-slate-800 hover:bg-slate-600  text-white w-fit px-6 py-2 rounded-2xl">
                5,000 টাকা <span className=""></span> এনরোল করুন
              </Button>
              <span className=" text-1 text-center my-3 font-medium">
                ডেডলাইন - 01 জানুয়ারি 2024 রাত 11:59 PM
              </span>
            </div>
            <Button className="border hidden md:flex hover:bg-slate-100 bg-slate-50 border-[#b3b3b341]  text-[#363636] w-fit px-4 py-2 rounded-2xl">
              <span>কিভাবে এনরোল করবেন?</span>
            </Button>
          </div>
          <span className="text-center text-xs md:text-sm lg:text-left">
            এনরোলমেন্টের সময় বাংলাদেশি মোবাইল নাম্বার ব্যবহার না করলে কোর্স ফি
            হবে 5,100 টাকা
          </span>
        </div>
      </div>
      <div className="">
        <iframe
          width="606"
          height="315"
          src="https://www.youtube-nocookie.com/embed/3UbjgjfYC-I?si=qErcz6UdGyEl_lo8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </main>
  );
}
