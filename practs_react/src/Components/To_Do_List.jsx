import{ useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]); // Array to store tasks
  const [taskInput, setTaskInput] = useState(""); // Input for adding a task
  const [taskToRemove, setTaskToRemove] = useState(""); // Input for removing a task by number

  // Function to add a task
  const handleAddTask = () => {
    if (taskInput.trim() === "") {
      alert("Please enter a valid task.");
      return;
    }
    setTasks([...tasks, taskInput.trim()]); // Add the task to the tasks array
    setTaskInput(""); // Clear the input field
  };

  // Function to remove a task by number
  const handleRemoveTask = () => {
    const taskIndex = parseInt(taskToRemove, 10) - 1; // Convert input to zero-based index
    if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
      alert("Invalid task number.");
      return;
    }
    setTasks(tasks.filter((_, index) => index !== taskIndex)); // Remove the task
    setTaskToRemove(""); // Clear the input field
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">To-Do List</h1>

      {/* Input and button for adding a task */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add Task
        </button>
      </div>

      {/* Input and button for removing a task */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter task number to remove"
          value={taskToRemove}
          onChange={(e) => setTaskToRemove(e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
        />
        <button
          onClick={handleRemoveTask}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Remove Task
        </button>
      </div>

      {/* Display the list of tasks */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Tasks:</h2>
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks available.</p>
        ) : (
          <ul className="list-disc pl-5">
            {tasks.map((task, index) => (
              <li key={index}>
                {index + 1}. {task}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
