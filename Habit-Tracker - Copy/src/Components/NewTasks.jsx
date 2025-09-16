
import { useState } from "react"
export default function NewTasks({ onAdd }) {

    const [enteredTask, setEnteredTask] = useState();

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        onAdd(enteredTask);
        setEnteredTask("");
    }
    return (
        <div className="flex items-center gap-4">
            <input type="text"
                value={enteredTask}
                onChange={handleChange}
                className="px-2 py-1 rounded-sm bg-gray-200" />
            <button onClick={handleClick}
                className="bg-stone-900 hover:bg-stone-600 rounded-sm p-1 text-white">Add Tasks</button>
        </div>
    )
}