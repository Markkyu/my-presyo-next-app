export async function GET(request, { params }) {
  const API_URL = process.env.API_URL;
  const { productId } = await params;

  const res = await fetch(`${API_URL}/api/category/${productId}/products`, {
    next: { revalidate: 100 },
  });

  if (!res.ok) {
    return Response.json(
      { error: "Failed to fetch products" },
      { status: res.status }
    );
  }

  const data = await res.json();

  return Response.json(data);
}
