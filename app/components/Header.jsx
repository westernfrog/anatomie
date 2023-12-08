"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [term, setTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      router.push(`/?query=${term}`);
    };

    handleRouteChange();
  }, [term, router]);

  const handleInputChange = (event) => {
    setTerm(event.target.value);
  };

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
            value={term}
            onChange={handleInputChange}
          />
        </nav>
      </header>
    </>
  );
}
