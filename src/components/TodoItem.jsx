import { TrashIcon } from '@heroicons/react/24/solid'
import { useState } from "react"

// utility class for stlying completed todo
let classComplete

function TodoItem(props) {
    const [isComplete, setCheck] = useState(false);

    function handleDelete() {
        props.deleteTodo(props.todo.id)
    }

    function handleCheckboxChange() { 
        setCheck(!isComplete)
    }

    setClassComplete(isComplete)

    return (
        <li className="block is-flex is-justify-content-space-between">
            <div>
                <label className="checkbox">
                    <input type="checkbox" checked={isComplete} onChange={handleCheckboxChange} className="checkbox mr-2" />
                    <span className={"pb-1" + classComplete}>
                        {props.todo.task}
                    </span>
                </label>
            </div>
            <div>
                <button type="button" onClick={handleDelete} className="button is-small is-danger is-outlined">
                    <TrashIcon className='icon' />
                </button>
            </div>
        </li>
    )
}

function setClassComplete(isComplete) {
    if (isComplete == true) {
        classComplete = "\x20complete\x20"
    } else {
        classComplete = ""
    }
}

export default TodoItem