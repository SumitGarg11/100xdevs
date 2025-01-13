import { useRecoilValue } from "recoil";
import { taskAtom } from "../store/atom/taskAtom";

const TaskList = () => {
  const task = useRecoilValue(taskAtom);
  return (
    <>
      <div>
        <h3>Task List</h3>
        {task.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </div>
    </>
  );
};

export default TaskList;
