"use client"
import React from "react";

export default function Page({}) {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const handleMouseMove = (event) => {
    const canvas = event.target;
    const context = canvas.getContext("2d");
    const offsetX = event.nativeEvent.offsetX;
    const offsetY = event.nativeEvent.offsetY;

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(offsetX, offsetY);
    context.stroke();

    setX(offsetX); 
    setY(offsetY); 
  };

  return (
    <div className="flex w-full h-full py-10 px-10">
      <div className="h-60 w-60 bg-slate-600">
        <div></div>
      </div>
      <canvas
        className="absolute w-full h-full pointer-events-none"
        onMouseMove={handleMouseMove}
      ></canvas>
    </div>
  );
}
