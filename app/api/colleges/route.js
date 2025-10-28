import React from "react";

export async function GET() {
  const API_URL = process.env.API_URL;

  const res = await fetch(`${API_URL}/api/colleges`);
  const data = await res.json();

  return Response.json(data);
}
