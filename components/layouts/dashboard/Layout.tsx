"use client";

import React, { createContext, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import DashboardSideBar from "./SideBar";
import HeaderWithSearchBtn from "./HeaderWithSearchBtn";
import { Typography } from "@mui/material";
import md_avatar from "@/public/avatars/sample.png";
import Image from "next/image";

export const SetCrumbContext = createContext<
  React.Dispatch<React.SetStateAction<string>>
>(() => {});

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [breadCrumb, setBreadCrumb] = useState("dashboard");

  return (
    <SetCrumbContext.Provider value={setBreadCrumb}>
      <div className="flex flex-col font-arial h-full">
        <HeaderWithSearchBtn />
        <div
          className="bg-blurColor flex flex-row h-[calc(100%-120px)]"
          style={{ borderTop: "1px solid #DFDBD8 " }}
        >
          <DashboardSideBar />
          <div
            style={{ borderLeft: "1px solid #C4C4C4" }}
            className="w-full flex flex-col"
          >
            <div className="flex flex-row items-center h-[100px] justify-between">
              <div className="flex flex-col ml-4">
                <span className="text-[16px] text-primary">{breadCrumb}</span>
                <Typography
                  id="greeting-caption"
                  variant="h6"
                  component="h2"
                  className="text text-distlineColor"
                >
                  Hi, Gabby Alao
                </Typography>
              </div>
              <div className="flex flex-row absolute right-[80px] items-center">
                <Image
                  style={{ borderRadius: "50%", height: "auto" }}
                  alt="md-avatar"
                  src={md_avatar}
                  width={66}
                />
                <div className="ml-[15px] flex flex-col text-distlineColor">
                  <span className="text-[16px] font-bold text-textdarkColor">
                    Tearia Alao
                  </span>
                  <span className="text-[14px]">
                    Care Manager at Seasoned Senior LLC
                  </span>
                  <span className="text-[14px]">+1 347 866 1828</span>
                </div>
              </div>
            </div>
            <Scrollbars className="h-full">{children}</Scrollbars>
          </div>
        </div>
      </div>
    </SetCrumbContext.Provider>
  );
};

export default DashboardLayout;
