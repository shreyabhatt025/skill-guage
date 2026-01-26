"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const linkClass = (href) =>
    `cursor-pointer transition-all
     ${
       pathname === href
         ? "text-blue-600 font-bold"
         : "text-black hover:text-blue-500"
     }`;

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src="/logo.svg" width={160} height={100} alt="logo" />

      <ul className="hidden md:flex gap-6">
        <li onClick={() => router.push("/dashboard")} className={linkClass("/dashboard")}>
          Dashboard
        </li>

        <li
          onClick={() => router.push("/dashboard/questions")}
          className={linkClass("/dashboard/questions")}
        >
          Question
        </li>

        <li
          onClick={() => router.push("/dashboard/upgrade")}
          className={linkClass("/dashboard/upgrade")}
        >
          Upgrade
        </li>

        <li
          onClick={() => router.push("/dashboard/how-it-works")}
          className={linkClass("/dashboard/how-it-works")}
        >
          How it works?
        </li>
      </ul>

      <UserButton />
    </div>
  );
}

export default Header;