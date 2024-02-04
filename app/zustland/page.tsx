"use client";
import { Button } from "@/components/ui/button";
import { useCounterStore, useFetchTodoStore } from "@/lib/store";
import React, { useEffect } from "react";

const Zustexample: React.FC = () => {
  const count = useCounterStore((state) => state.count);

  return (
    <div className="flex items-center h-screen flex-col p-32 ">
      <h1 className="text-4xl font-semibold bg-teal-200">Zustland</h1>
      <h2 className="text-2xl font-semibold bg-teal-200">Count: {count}</h2>
      <OtherComponent />
    </div>
  );
};

const OtherComponent: React.FC = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <>
      <div className="flex gap-8 bg-fuchsia-300 p-8">
        <Button onClick={increment}>Increment</Button>
        <h2 className="text-2xl font-semibol">Count: {count}</h2>

        <Button onClick={decrement}>Increment</Button>
        {/* <Button onClick={incrementBy5}>Increment by 5</Button> */}
      </div>
      <FetchComponent />
    </>
  );
};

const FetchComponent = () => {
  const todos = useFetchTodoStore((state) => state.todos);
  const fetchTodos = useFetchTodoStore((state) => state.fetchTodos);
  const isLoading = useFetchTodoStore((state) => state.isLoading);

  console.log("todos", todos);

  return (
    <>
      <div className="mt-32">
        <Button onClick={fetchTodos}>Fetch Todo</Button>
      </div>
      {isLoading && <h1>Loading...</h1>}

      {!isLoading && todos.map((item) => <p key={item.id}>{item?.title}</p>)}
    </>
  );
};

export default Zustexample;
