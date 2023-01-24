import { Suspense } from "react";
import TodoList from "./(users)/components/TodoList";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p className="text-red-500">Loading the Todos</p>}>
        <div className="flex space-x-2 mb-5">
          {/* @ts-ignore */}
          <TodoList />
        </div>
      </Suspense>

      <Suspense fallback={<p className="text-blue-500">Loading the shopping Trolley</p>}>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodoList />
        </div>
      </Suspense>
    </div>
  );
}
