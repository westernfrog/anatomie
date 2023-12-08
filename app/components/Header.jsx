"use client";

import { useState } from "react";

export default function Header() {
  const [term, setTerm] = useState("");
  return (
    <>
      <header>
        <nav className="bg-neutral-800">
          <input
            type="search"
            name=""
            id=""
            className="w-full bg-transparent border-0 px-8 py-5 focus:ring-2 focus:ring-rose-700 text-neutral-300 placeholder:text-neutral-300"
            placeholder="Search any topic..."
          />
        </nav>
      </header>
    </>
  );
}
