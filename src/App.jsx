import Tasks from "./assets/components/Tasks";
import AddTask from "./assets/components/AddTask";
import { useState } from "react";

function App() {
  //State
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programacao",
      description: "Estudar para ser dev",
      isCompleted: false,
    },
    {
      id: 1,
      title: "Estudar ingles",
      description: "Estudar para ser fluente",
      isCompleted: false,
    },
    {
      id: 1,
      title: "Estudar AWS",
      description: "Estudar infraestutura",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
