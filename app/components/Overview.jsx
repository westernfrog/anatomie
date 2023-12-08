"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import utf8 from "utf8";

export default function Overview() {
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
        const response = await fetch("/api/search", {
          method: "GET",
        });

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
  }, []);

  console.log(accessToken);
  console.log(data);

  return (
    <>
      <main className="p-8">
        <div className="grid lg:grid-cols-12 gap-8">
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
