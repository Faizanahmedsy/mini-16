"use client";

import { Button } from "@/components/ui/button";
import { useReducer } from "react";

type ActionType = "Increment";

interface State {
  count: number;
  bgColor: string;
}

const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];

export default function ReducerExample() {
  const counterReducer = (
    state: State,
    action: { type: ActionType }
  ): State => {
    switch (action.type) {
      case "Increment":
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        return {
          ...state,
          count: state.count + 1,
          bgColor: randomColor,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    bgColor: "bg-gray-500",
  });

  return (
    <div
      className={`flex justify-center items-center h-screen gap-4 ${state.bgColor}`}
    >
      <Button
        onClick={() =>
          dispatch({
            type: "Increment",
          })
        }
      >
        Increment
      </Button>
      <h1 className="text-4xl font-bold">Count: {state.count}</h1>
    </div>
  );
}
