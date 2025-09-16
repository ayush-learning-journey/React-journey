
import NewTasks from "./NewTasks"

export default function Task({ tasks, onAdd, onDelete }) {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-stone-700 mb-4">Tasks</h2>
            <NewTasks onAdd={onAdd} />
            {tasks.length === 0 && (<p className="text-stone-800 mb-4">
                This Project does not have any tasks yet</p>)}
            {tasks.length > 0 && (
                <ul className="p-2 mt-4 rounded-md bg-stone-200">
                    {
                        tasks.map((tasks) => (
                            <li key={tasks.id} className="flex justify-between my-2" >
                                <span>
                                    {tasks.text}
                                </span>
                                <button onClick={() => onDelete(tasks.id)}
                                    className="text-white bg-stone-600 hover:bg-red-600 p-1 rounded-md">Clear</button>
                            </li>
                        ))
                    }
                </ul>
            )}


        </section>
    )
}