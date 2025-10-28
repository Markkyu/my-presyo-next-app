import Link from "next/link";

export default async function Home() {
  const API_URL = process.env.API_URL;

  console.log(API_URL);

  const res = await fetch(`${API_URL}/api/category`, {
    next: { revalidate: 1 },
  });
  const data = await res.json();

  // const res = await fetch(`${process.env.VERCEL_URL}/api/category`);

  // const data = await res.json();

  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center">
      <div className="flex flex-col gap-2 w-full max-w-xl px-10 py-4 rounded bg-gray-400">
        <h1 className="text-black text-center font-semibold">Products List</h1>
        {data.map((a) => (
          <Link
            key={a.category_id}
            href={`/category/${a.category_id}/products`}
          >
            <div className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-900 cursor-pointer">
              {a.category_name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
