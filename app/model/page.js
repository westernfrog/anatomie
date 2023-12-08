"use client";

import { useSearchParams } from "next/navigation";

export default function Model() {
  const router = useSearchParams();
  const string = router.get("string");
  return (
    <>
      <iframe
        className="w-screen h-screen"
        src={`https://human.biodigital.com/viewer/?m=${string}&ui-menu=false&ui-panel=false&dk=9149a1357e3e12fa2a27fe0a7c4ae0db46ef1822`}
      ></iframe>
    </>
  );
}
