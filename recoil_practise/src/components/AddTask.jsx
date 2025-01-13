import { useRecoilState } from "recoil";
import { inputAtom, taskAtom } from "../store/atom/taskAtom";

const AddTask = () => {
  const [task, setTask] = useRecoilState(taskAtom);
  const [inputValue, setInputValue] = useRecoilState(inputAtom);
  const addTask = () => {
    if (inputValue.trim()) {
      setTask((prevTask) => [...prevTask, inputValue]); // add the task
      setInputValue("");
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter The Task "
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </>
  );
};
export default AddTask;
