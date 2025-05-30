"use client";

import React, { useState } from "react";
import MemeCanvas from "@/components/MemeCanvas";

export default function Home() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-center">Meme Generator</h1>

      {/* Top Text Input */}
      <input
        type="text"
        placeholder="Top text"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
        className="border p-2 rounded w-full"
      />

      {/* Bottom Text Input */}
      <input
        type="text"
        placeholder="Bottom text"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
        className="border p-2 rounded w-full"
      />

      {/* Meme Canvas */}
      <MemeCanvas
        image="/template.jpg" // make sure the image is in the `public/` folder
        topText={topText}
        bottomText={bottomText}
      />
    </div>
  );
}
