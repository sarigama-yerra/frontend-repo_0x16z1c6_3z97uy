import React from "react";

export default function Header() {
  return (
    <header className="w-full py-8 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">
        Live Support Office Hours
      </h1>
      <p className="mt-3 text-blue-200/80 max-w-2xl mx-auto">
        Join our open Zoom room during office hours to get real-time help.
      </p>
    </header>
  );
}
