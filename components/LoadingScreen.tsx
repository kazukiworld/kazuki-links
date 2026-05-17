"use client";

import { useModelStore } from "@/lib/zustand/modelStore";
import { useTranslations } from "next-intl";
import ReachingHandSvg from "./svg/ReachingHandSvg";

export default function LoadingScreen() {
  const { modelLoading } = useModelStore();
  const t = useTranslations();

  return (
    <div
      className={`z-50 fixed inset-0 w-screen h-screen flex flex-col justify-center bg-black items-center transition-all ease-out duration-1000
      ${modelLoading ? "opacity-100" : "opacity-0 invisible"}
       `}
    >
      <div className="animate-pulse w-full h-full rounded flex flex-col justify-center items-center">
        <div className="flex rotate-180">
          <ReachingHandSvg className="fill-white w-24 h-24 transform -scale-x-100" />
          <ReachingHandSvg className="fill-white w-24 h-24" />
        </div>
        <h1 className="font-bold font-playfair text-white">{t("loading")}</h1>
        <div className="flex">
          <ReachingHandSvg className="fill-white w-24 h-24 transform -scale-x-100" />
          <ReachingHandSvg className="fill-white w-24 h-24" />
        </div>
      </div>
    </div>
  );
}
