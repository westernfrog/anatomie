import utf8 from "utf8";

export async function POST() {
  const YOUR_DEVELOPER_KEY = "9149a1357e3e12fa2a27fe0a7c4ae0db46ef1822";
  const YOUR_DEVELOPER_SECRET = "1a3cc53aa042c18e3c0db9613f7cfd15b253f332";
  const TOKEN_ENDPOINT = "https://apis.biodigital.com/oauth2/v1/token";

  const auth_str = `${YOUR_DEVELOPER_KEY}:${YOUR_DEVELOPER_SECRET}`;
  const encodedAuthStr = Buffer.from(utf8.encode(auth_str)).toString("base64");

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

    return Response.json({ accessToken });
  } catch (error) {
    console.error("Error fetching access token:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
