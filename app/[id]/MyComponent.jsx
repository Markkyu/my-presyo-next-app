"use client";

import { useState } from "react";

export default function MyComponent() {
  const [num, setNum] = useState(0);

  return (
    <>
      <h1>{num}</h1>
      <button
        className="bg-red-200 border-2 border-red-400 rounded text-black px-4 py-2"
        onClick={() => setNum((prev) => prev + 1)}
      >
        Do not click this button
      </button>
    </>
  );
}
