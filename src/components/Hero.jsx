import DateDisplay from "./DateDisplay";

export default function Hero() {
  return (
    <div className=" bg-indigo-700 relative h-40 p-4 justify-center rounded-2xl text-white flex flex-col gap-4">
      <DateDisplay />
    </div>
  );
}
