"use client";

import { useSearchParams } from "next/navigation";

export default function Model() {
  const router = useSearchParams();
  const string = router.get("string");
  return (
    <>
      <iframe
        className="w-screen h-screen"
        src={`https://human.biodigital.com/viewer/?m=${string}&ui-menu=false&ui-panel=false&dk=671d60d629ed28d550258d94e314a59cb731dc37`}
      ></iframe>
    </>
  );
}
