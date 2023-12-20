import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="drop-shadow-md backdrop-blur-md sticky top-0 shadow-sm py-5">
      <div className="container flex items-center justify-between">
        <Image src="/next.svg" width={100} height={50} alt="Next.js Logo" />
        <nav className="flex items-center gap-5 ">
          <Link href="/">হোম</Link>
          <Link href="/react">রিয়াক্টিভ এক্সিলারেটর</Link>
          <Link href="/course">কোর্স</Link>
          <Link href="/project">প্রজেক্টস</Link>
          <Link href="/why-course">কেন করবেন</Link>
          <Link href="/prerequisites">কি জানতে হবে</Link>
          <Link href="modules">মডিউলস</Link>
          <Link href="process">কিভাবে চলবে</Link>
          <Link href="support">সাপোর্ট</Link>
          <Link href="faq">সাধারণ প্রশ্নের উত্তর</Link>
          <Button variant="transparent">Theme</Button>
          <Link href="/login">লগইন</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
