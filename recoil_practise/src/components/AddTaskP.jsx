import { useRecoilState } from "recoil";
import { inputAtom, taskAtom } from "../store/atom/taskAtom";

const AddTaskP = () => {
  const [inputValue, setInputValue] = useRecoilState(inputAtom);
  const [task, setTask] = useRecoilState(taskAtom);

  const addTask = () => {
    if (inputValue.trim()) {
      setTask((prevTask) => [...prevTask, inputValue]);
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
export default AddTaskP;
