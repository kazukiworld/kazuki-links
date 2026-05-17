"use client";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Introduction from "@/components/sections/introduction";
import Works from "@/components/sections/works";
import PrayingHandSvg from "@/components/svg/PrayingHandSvg";
import { useModelStore } from "@/lib/zustand/modelStore";
import type { SectionId } from "@/lib/zustand/navStore";
import { useNavStore } from "@/lib/zustand/navStore";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { ComponentType } from "react";
import ReachingHandSvg from "./svg/ReachingHandSvg";
import ExitIcon from "./svg/icon/ExitIcon";
import InstagramLogo from "./svg/icon/InstagramLogo";
import LinkedInLogo from "./svg/icon/LinkedInLogo";

const SECTION_COMPONENTS: Partial<Record<SectionId, ComponentType>> = {
  introduction: Introduction,
  experience: Experience,
  works: Works,
  contact: Contact,
};

const SECTION_IDS: SectionId[] = [
  "introduction",
  "experience",
  "works",
  "contact",
];

export default function ProfileLinks() {
  const { animate, setAnimate, modelLoading } = useModelStore();
  const { activeSection, setActiveSection } = useNavStore();
  const tHero = useTranslations("hero");
  const tNav = useTranslations("nav");

  const handleSectionClick = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    setAnimate(true);
  };

  const handleCloseModal = () => {
    setAnimate(false);
    setActiveSection(null);
  };

  const ActiveSectionContent = activeSection
    ? SECTION_COMPONENTS[activeSection]
    : null;

  const badges = tHero.raw("badges") as string[];

  return (
    <div
      className={`font-playfair z-30 fixed inset-0 flex flex-col justify-center items-center space-y-4 transition-all duration-1000 ease-out ${modelLoading ? "opacity-0" : "opacity-100"}`}
    >
      <div
        className={`z-30 w-full p-4 lg:max-w-xl transition-all text-white ${
          animate
            ? "opacity-0 invisible"
            : "delay-300 duration-1000 opacity-100"
        }`}
      >
        <div className="relative">
          <Image
            src="/images/open-hand.png"
            alt=""
            width={800}
            height={400}
            className="pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2 object-contain object-bottom opacity-10"
          />
          <div className="relative z-10 space-y-4">
            <div className="flex justify-between items-center gap-4">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Kazuki Mori
              </h1>
              <ul className="flex shrink-0 items-center gap-2.5 sm:gap-3">
                <li>
                  <a
                    className="w-6 h-6"
                    href="https://www.linkedin.com/in/kazukimori/"
                  >
                    <LinkedInLogo className="fill-white w-8 h-8" />
                  </a>
                </li>
                <li>
                  <a
                    className="w-8 h-8"
                    href="https://www.instagram.com/kazukisworld"
                  >
                    <InstagramLogo className="fill-white w-8 h-8" />
                  </a>
                </li>
                <LocaleSwitcher />
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">{tHero("tagline")}</h2>
              <p className="text-left leading-relaxed text-zinc-100">
                {tHero("description")}
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-white/90"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`z-30 w-full flex justify-center items-center transition-all duration-700 lg:max-w-3xl ${
          animate
            ? "scale-0 -translate-y-36 opacity-50"
            : "scale-100 translate-y-0 opacity-100"
        }`}
      >
        <PrayingHandSvg className="w-[30vh] fill-white translate-y-10 -translate-x-4" />
        <div
          className={`flex flex-col justify-center items-center space-y-2 duration-400
          ${animate ? "scale-0 w-0" : "scale-x-100 w-full"}`}
        >
          {SECTION_IDS.map((id, i) => (
            <button
              key={id}
              className={`link-button-float-${i} w-full whitespace-nowrap py-2 font-bold text-white`}
              onClick={() => handleSectionClick(id)}
            >
              {tNav(id)}
            </button>
          ))}
        </div>
        <PrayingHandSvg className="w-[30vh] fill-white translate-y-10 translate-x-4 -scale-x-100" />
      </div>

      <div
        className={`fixed inset-0 w-full h-full p-4 flex items-center justify-center`}
      >
        <div className="relative w-full lg:max-w-3xl">
          <div
            className={`absolute bottom-full left-0 right-0 w-full h-[25vh] flex justify-center items-center pointer-events-none transition-all ${
              animate
                ? "-translate-x-24 lg:-translate-x-80 delay-700 duration-1000 ease-in-out opacity-100"
                : "translate-x-24 opacity-0 invisible"
            }`}
          >
            <ReachingHandSvg
              className="fill-white transform -scale-y-100 w-auto h-full"
            />
          </div>
          <div
            className={`relative z-10 bg-black/95 border h-[70vh] border-white w-full flex flex-col justify-between rounded p-4 space-y-4 transition-all ${
              animate
                ? "scale-y-100 delay-700 duration-1000"
                : "-scale-y-0 h-0 min-h-0"
            }`}
          >
            <div className="flex justify-between items-start gap-4 pb-0 mb-0 text-white">
              <h1 className="font-bold text-lg sm:text-xl">
                {activeSection ? tNav(activeSection) : ""}
              </h1>
              <ExitIcon
                onClick={handleCloseModal}
                className="w-6 h-6 shrink-0 fill-white"
              />
            </div>
            <div className="mt-6 min-h-0 flex-1 overflow-y-auto text-base">
              {ActiveSectionContent && <ActiveSectionContent />}
            </div>
          </div>
          <div
            className={`absolute top-full left-0 right-0 w-full h-[25vh] flex justify-center items-center pointer-events-none transition-all ${
              animate
                ? "translate-x-24 lg:translate-x-80 delay-700 duration-1000 ease-in-out opacity-100"
                : "-translate-x-24 opacity-0 invisible"
            }`}
          >
            <ReachingHandSvg className="fill-white transform -scale-x-100 w-auto h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}