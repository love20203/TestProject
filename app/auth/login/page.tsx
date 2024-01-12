"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import WithRightBG from "@/components/ui/auth/WithRightBG";
import LogoImg from "@/components/ui/auth/LogoImg";
import FormPrimaryBtn from "@/components/ui/auth/FormPrimaryBtn";
import EmailLogin from "@/components/ui/auth/EmailLogin";
import SocialAuth from "@/components/ui/auth/SocialAuth";
import AuthConvert from "@/components/ui/auth/AuthConvert";
import DistLine from "@/components/ui/auth/DistLine";
import VerifyMailBox from "@/components/ui/auth/VerifyMailBox";
import { RouteRounded } from "@mui/icons-material";

const Login = () => {
  const router = useRouter();

  return (
    <>
      <WithRightBG imgpathname="/images/login.png">
        <LogoImg onClicked={() => router.push("/")} />
        <div className="font-arial w-[450px] mx-auto mt-[186px] sm:w-full">
          <div className="w-[370px] ml-[40px]">
            <div className="text-center">
              <div className=" text-[32px] text-textdarkColor font-arial font-bold">
                Welcome Back
              </div>
              <div className="text-base text-distlineColor font-arial font-normal mt-4">
                Caring for our seniors, cherishing our community.
              </div>
            </div>
            <div className="py-4 px-4 text-base leading-6 space-y-4 text-gray-700">
              <EmailLogin />
              <div className="relative">
                <FormPrimaryBtn
                  onClicked={() => {
                    // alert("Login Btn Clicked!");
                    router.push('/dashboard');
                  }}
                >
                  Sign In
                </FormPrimaryBtn>
              </div>
              <DistLine />
              <SocialAuth
                onClickedAppleBtn={() => {}}
                onClickedGoogleBtn={() => {}}
              />
              <AuthConvert
                experssion="Don’t have an account "
                action="Create account"
                href="/auth/signup"
              />
            </div>
          </div>
          <p className="text-xs text-gray-600 text-center w-full">
            By creating an account you agree with our Terms of Service, Privacy
            Policy, and our default Notification Settings. You also agree to the
            &nbsp;
            <a
              href="#"
              className="border-b border-gray-500 border-dotted text-forgotColor"
            >
              Terms of Service
            </a>
            &nbsp; and &nbsp;
            <a
              href="#"
              className="border-b border-gray-500 border-dotted text-forgotColor"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </WithRightBG>
    </>
  );
};

export default Login;
