import Link from "next/link";
import { cacheTag } from "next/cache";

export default async function page({ params }) {
  const { productId } = await params;

  const res = await fetch(
    `http://localhost:3001/api/category/${productId}/products`
  );

  const data = await res.json();

  //   const API_URL = process.env.API_URL;

  //   console.log(API_URL);

  //   const res = await fetch(`${API_URL}/api/category/${productId}/products`, {
  //     next: { revalidate: 100 },
  //     tags: [productId],
  //   });
  //   const data = await res.json();

  //   console.log(productId);

  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center">
      <Link href="/">
        <button className="px-4 py-2 bg-blue-200 rounded text-black">
          Go Home
        </button>
      </Link>
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
