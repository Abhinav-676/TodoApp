import { PlusIcon } from '@heroicons/react/24/solid'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function TodoForm(props) {
    const [task, setTask] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        props.addTodo({task: task, id: uuidv4()})
        setTask("")
    }

    return (
        <form className="block is-flex is-justify-content-center" onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input 
                        className="input" 
                        name="todo"
                        value={task}
                        onInput={(e) => {setTask(e.target.value)}}
                    />
                </div>
                <div className="control">
                    <button className="button is-primary">
                        <PlusIcon className='icon' />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default TodoForm