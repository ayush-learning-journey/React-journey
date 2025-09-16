
import Input from "./input.jsx"
import { useRef } from "react"
import Modal from "./Modal"


export default function NewProject({ onAdd, onCancel }) {

    const modal = useRef();

    const title = useRef();
    const Description = useRef();
    const DueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = Description.current.value;
        const enteredDueDate = DueDate.current.value;

        if (enteredTitle.trim().length === 0 ||
            enteredDescription.trim().length === 0 ||
            enteredDueDate.trim().length === 0) {
            modal.current.open();
            return;

        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })


    }
    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2> Invalid Input</h2>
                <p>Make sure you fill all input fields correctly</p>
            </Modal>
            <div className="w-2/3 mt-16 px-6">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button onClick={onCancel}
                            className="text-stone-800 hover:text-stone-950">
                            Cancel
                        </button>
                    </li>
                    <li>

                        <button
                            onClick={handleSave}
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                            Save
                        </button>
                    </li>
                </menu>

                <div>
                    <h2 className="text-3xl font-bold text-stone-700 mb-4">Create a New Project</h2>
                    <Input type="text" label="Title" ref={title} />
                    <Input label="Description" textarea ref={Description} />
                    <Input type="date" label="Due Date" ref={DueDate} />
                </div>
            </div>


        </>
    )
}