"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import utf8 from "utf8";

export default function Overview() {
  const [accessToken, setAccessToken] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await fetch("/api/accessToken", {
          method: "POST",
        });

        if (response.ok) {
          const data = await response.json();
          setAccessToken(data.accessToken);
        } else {
          console.error("Error fetching access token:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    fetchAccessToken();
  }, []);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await fetch("/api/search", {
          method: "GET",
        });

        if (response.ok) {
          const data = await response.json();
          setSearch(data);
        } else {
          console.error("Error fetching access token:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    fetchSearch();
  }, []);

  console.log(accessToken);
  console.log(search);

  return (
    <>
      <main className="p-8 my-6"></main>
    </>
  );
}
