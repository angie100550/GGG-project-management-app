import { useState } from "react";

export default function TasksPage() {
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id: number) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      console.log("Updated Tasks:", updatedTasks); // ✅ Debugging output
      return updatedTasks;
    });
  };

  const deleteTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Task Page</h1>

      {/* Input field to add tasks */}
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          className="border p-2 rounded w-64"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={addTask}
        >
          ➕ Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="bg-white p-4 rounded shadow-md w-80">
        {tasks.map(task => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 border-b last:border-none"
          >
            <span className={`${task.completed ? "line-through text-gray-500 opacity-50" : "text-black"}`}>
              {task.text}
            </span>
            <div className="flex space-x-2">
              <button
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                onClick={() => toggleTask(task.id)}
              >
                ✅ Done
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => deleteTask(task.id)}
              >
                🗑 Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div> // ✅ Added missing closing div
  );
}

