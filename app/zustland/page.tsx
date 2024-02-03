"use client";
import { useCounterStore } from "@/lib/store";

const Zustexample = () => {
  const count = useCounterStore((state) => state.count);

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-4xl font-semibold">Zustland</h1>
      <div>Count: {count}</div>
    </div>
  );
};

export default Zustexample;
