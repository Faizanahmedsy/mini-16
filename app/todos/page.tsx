"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import useTodos from "../../services/todo-hook";

const TodoTable = () => {
  const { data: todosData, isFetching, error, refetch } = useTodos();

  const { todos } = todosData || [];

  console.log("todos", todos);

  if (isFetching) return <div>Loading...</div>;

  return (
    <div className="p-32">
      <div>
        <h1 className="text-2xl font-bold mb-4">Todos</h1>
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        >
          Refresh
        </button>
      </div>
      <Table>
        <TableCaption>A list of your recent Todos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[600px]">Todo</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Usr Id</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.isArray(todos) &&
            todos.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.todo}</TableCell>
                <TableCell>
                  {item.completed ? "COmpleted" : "Pending"}
                </TableCell>
                <TableCell className="text-right">{item.userId}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default TodoTable;
