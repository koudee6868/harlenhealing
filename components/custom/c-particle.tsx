"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "@/components/magicui/particles";

export function ParticlesCustom() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#FFF");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#FFF");
  }, [resolvedTheme]);

  return (
    // Xóa các class bg-background, border, rounded-lg ở dòng dưới
    <div className="relative flex h-[380px] w-full flex-col items-center justify-center overflow-hidden pointer-events-none">
      
      {/* Thẻ span này không thay đổi */}
      <span className="pointer-events-auto z-50 whitespace-pre-wrap text-center text-7xl font-semibold leading-none text-white">
        
      </span>

      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}