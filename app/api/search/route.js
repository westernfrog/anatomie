export async function GET() {
  const url =
    "https://human.biodigital.com/search?k=heart&t=%22live%22&zspace=false&il=en&ol=en&odns=true&limit=10";

  try {
    const response = await fetch(url);
    const responseObj = await response.json();
    console.log(responseObj);

    return Response.json({ responseObj });
  } catch (error) {
    console.error("Error fetching access token:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
