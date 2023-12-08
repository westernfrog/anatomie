"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import utf8 from "utf8";

const YOUR_DEVELOPER_KEY = "9149a1357e3e12fa2a27fe0a7c4ae0db46ef1822";
const YOUR_DEVELOPER_SECRET = "1a3cc53aa042c18e3c0db9613f7cfd15b253f332";
const TOKEN_ENDPOINT = "https://apis.biodigital.com/oauth2/v2/token";

export default function Overview() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const auth_str = `${YOUR_DEVELOPER_KEY}:${YOUR_DEVELOPER_SECRET}`;
      const encodedAuthStr = Buffer.from(utf8.encode(auth_str)).toString(
        "base64"
      );

      const requestBody = {
        grant_type: "client_credentials",
        scope: "contentapi",
      };

      const headers = {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
        Authorization: `Basic ${encodedAuthStr}`,
      };

      const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestBody),
      };

      try {
        const response = await fetch(TOKEN_ENDPOINT, options);
        const responseObj = await response.json();

        const accessToken = responseObj.access_token;

        setAccessToken(accessToken);
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    fetchAccessToken();
  }, []);

  console.log(accessToken);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://human.biodigital.com/search?k=heart&t=%22live%22&zspace=false&il=en&ol=en&odns=true"
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

    fetchData();
  }, []);

  return (
    <>
      <main className="p-8 my-6">
        <div className="grid lg:grid-cols-12 gap-8">
          {data &&
            data.results.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                desc={item.description}
                url={item.thumbnail_url}
              />
            ))}
        </div>
      </main>
    </>
  );
}
