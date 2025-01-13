import { useRecoilValue } from "recoil";
import { taskAtom } from "../store/atom/taskAtom";

const TaskListP = () => {
  const task = useRecoilValue(taskAtom);
  return (
    <>
      <div>
        <h1>Task List</h1>
        {task.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </div>
    </>
  );
};

export default TaskListP;
