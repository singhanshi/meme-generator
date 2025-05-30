"use client";

import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
  MouseEvent,
  TouchEvent,
} from "react";

type Props = {
  image: string;
  topText: string;
  bottomText: string;
};

type Position = { x: number; y: number };

const MemeCanvas = forwardRef<HTMLCanvasElement, Props>(
  ({ image, topText, bottomText }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [topPos, setTopPos] = useState<Position>({ x: 200, y: 60 });
    const [bottomPos, setBottomPos] = useState<Position>({ x: 200, y: 360 });
    const [draggingText, setDraggingText] = useState<"top" | "bottom" | null>(
      null
    );

    useImperativeHandle(ref, () => canvasRef.current!);

    useEffect(() => {
      drawCanvas();
    }, [image, topText, bottomText, topPos, bottomPos]);

    const drawCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = image;

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);

        const fontSize = Math.floor(canvas.width / 10);
        ctx.font = `${fontSize}px Impact`;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 4;
        ctx.textAlign = "center";

        ctx.fillText(topText, topPos.x, topPos.y);
        ctx.strokeText(topText, topPos.x, topPos.y);

        ctx.fillText(bottomText, bottomPos.x, bottomPos.y);
        ctx.strokeText(bottomText, bottomPos.x, bottomPos.y);
      };
    };

    const getEventPosition = (e: MouseEvent | TouchEvent): Position => {
      const canvas = canvasRef.current!;
      const rect = canvas.getBoundingClientRect();
      if ("touches" in e) {
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      } else {
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
    };

    const isWithin = (pos: Position, target: Position, radius = 50) =>
      Math.abs(pos.x - target.x) < radius &&
      Math.abs(pos.y - target.y) < radius;

    const handleStart = (e: MouseEvent | TouchEvent) => {
      const pos = getEventPosition(e);
      if (isWithin(pos, topPos)) {
        setDraggingText("top");
      } else if (isWithin(pos, bottomPos)) {
        setDraggingText("bottom");
      }
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!draggingText) return;
      e.preventDefault();
      const pos = getEventPosition(e);

      if (draggingText === "top") setTopPos(pos);
      else if (draggingText === "bottom") setBottomPos(pos);
    };

    const handleEnd = () => {
      setDraggingText(null);
    };

    return (
      <canvas
        ref={canvasRef}
        className="w-full max-w-md border rounded shadow-md touch-none"
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      />
    );
  }
);

export default MemeCanvas;
