"use client";

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useMediaQuery } from "@/utils/useMediaQuery";

import '@/app/globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const isSM = useMediaQuery(640);

  return(
    <html lang="en">
      <head>
        <title>Interview Test</title>
      </head>
      <body className="font-sans flex flex-col">
        <header
          className={`h-[106px] md:h-auto sm:h-auto bg-primaryBgColor flex justify-between 
                            4xl:px-[150px] 3xl:px-[150px] px-[50px] md:py-[20px] sm:py-[20px]`}
        >
          <div className="flex mt-auto mb-auto h-auto cursor-pointer">
            <Image
              alt="logo"
              src="/icons/app_logo.svg"
              onClick={() => router.push("/")}
              width={isSM ? 120 : 160}
              height={60}
              priority={true}
            />
            <div className="font-arial lg:hidden sm:hidden mt-[20px] ml-[20px]">
              I hope you are impressed with my project.
            </div>
          </div>
          <div className="flex md:hidden sm:hidden md:flex-col sm:flex-col items-center md:items-start sm:items-start">
            <button
                className={`bg-transparent text-primary hover:text-white hover:bg-primary text-bigPrimaryButtonTextSize px-8 py-4 mx-4 rounded-lg`}
              >
                <Link href = '/dashboard'>Dashboard</Link>
              </button>

              <button
                className={`bg-transparent text-primary hover:text-white hover:bg-primary text-bigPrimaryButtonTextSize px-8 py-4 mx-4 rounded-lg`}
                onClick={() => {
                  localStorage.setItem("signup_mode", "after login");
                  router.push("/auth/login");
                }}
              >
                Login
              </button>
          </div>
        </header>
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  )
}
