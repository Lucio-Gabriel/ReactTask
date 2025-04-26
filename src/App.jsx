import Tasks from "./assets/components/Tasks";
import AddTask from "./assets/components/AddTask";

function App() {
  return (
    <div>
      <h1>Gerenciador de tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
