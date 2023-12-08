"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import { useSearchParams } from "next/navigation";

export default function Overview() {
  const router = useSearchParams();
  const query = router.get("query");
  const [accessToken, setAccessToken] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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
        const response = await fetch(
          `/api/search?query=${query ? query : "Heart"}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchSearch();
  }, [query]);

  return (
    <>
      <main className="lg:px-8 px-6 py-8">
        <div className="lg:grid grid-cols-12 flex flex-col gap-8">
          {data &&
            data.responseObj.results
              .slice(0, 20)
              .map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  desc={item.description}
                  url={item.thumbnail_url}
                />
              ))}
        </div>
        {error && <p>Error: {error}</p>}
      </main>
    </>
  );
}
