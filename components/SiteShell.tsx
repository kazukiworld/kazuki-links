"use client";

import ModelViewer from "@/components/3DViewers/ModelViewer";
import LoadingScreen from "@/components/LoadingScreen";
import ProfileLinks from "@/components/ProfileLinks";
import Image from "next/image";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen">
      <ModelViewer />
      <Image
        className="z-10 fixed inset-0 w-full h-screen opacity-10"
        src="/images/grainy-overlay.gif"
        alt="Grainy GIF"
        width={1000}
        height={1000}
      />
      <ProfileLinks />
      <LoadingScreen />
      {children}
    </div>
  );
}
