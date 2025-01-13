import { RecoilRoot } from "recoil";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import AddTaskP from "./components/AddTaskP";
import TaskListP from "./components/TaskListP";

function App() {
  return (
    <RecoilRoot>
      <div>
        <h1>Task Manager</h1>
        {/* <AddTask />
        <TaskList /> */}
        <AddTaskP />
        <TaskListP />
      </div>
    </RecoilRoot>
  );
}

export default App;
