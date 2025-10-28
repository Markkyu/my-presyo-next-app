import MyComponent from "./MyComponent";

export default async function ParamsId({ params }) {
  const { id } = await params;

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen w-full">
      <p>You are on this page: {id}</p>
      <MyComponent />
    </div>
  );
}
