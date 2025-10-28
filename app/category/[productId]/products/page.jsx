import React from "react";

export default async function page({ params }) {
  const API_URL = process.env.API_URL;
  const { productId } = await params;

  console.log(API_URL);

  const res = await fetch(`${API_URL}/api/category/${productId}/products`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();

  console.log(productId);

  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center">
      <div className="bg-gray-400 rounded p-4 flex flex-col gap-2">
        <h1 className="text-center font-semibold text-xl text-black">
          Products
        </h1>
        {data.map((a) => (
          <div
            key={a.product_id}
            className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-900 cursor-pointer"
          >
            {a.product_name} - ₱{a.product_price}
          </div>
        ))}
      </div>
    </div>
  );
}
