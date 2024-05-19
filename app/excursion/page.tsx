"use client";


import Arena from "@/components/excursion/arena/Arena";
import EngineProvider from "@/game/engine/EngineContext";

export default function Page({}) {
  return (
    <div className="flex w-full h-full py-10 px-10">
      <EngineProvider>
        <Arena></Arena>
      </EngineProvider>
    </div>
  );
}
