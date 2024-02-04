import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

type FetchTodoStore = {
  todos: any[];
  isLoading: boolean;
  fetchTodos: () => Promise<void>;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  decrement: () => {
    set((state) => ({
      count: state.count - 1,
    }));
  },
}));

export const useFetchTodoStore = create<FetchTodoStore>((set) => ({
  todos: [],
  isLoading: false,

  fetchTodos: async () => {
    set({ isLoading: true });
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    set({ todos: todos, isLoading: false });
  },
}));
