import { PlusIcon } from '@heroicons/react/24/solid'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function TodoForm(props) {

    const [todo, setTodo] = useState({task: "", id: ""})

    function handleSubmit(e) {
        e.preventDefault()
        const newTodo = {...todo}
        newTodo.id = uuidv4()
        props.addTodo(newTodo)
        setTodo({task: "", id: ""})
    }

    return (
        <form className="block is-flex is-justify-content-center" onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input 
                        className="input" 
                        name="todo"
                        value={todo.task}
                        onInput={(e) => {setTodo({task: e.target.value, id: ""})}}
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