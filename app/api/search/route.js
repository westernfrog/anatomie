export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    const url = `https://human.biodigital.com/search?k=${query}&t=%22live%22&zspace=false&il=en&ol=en&odns=true&limit=10`;

    const response = await fetch(url);
    const responseObj = await response.json();

    return Response.json({ responseObj });
  } catch (error) {
    console.error("Error fetching access token:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
