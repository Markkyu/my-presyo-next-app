import React from "react";

export async function GET() {
  const API_URL = process.env.API_URL;

  const res = await fetch(`${API_URL}/api/category`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();

  return Response.json(data);
}
