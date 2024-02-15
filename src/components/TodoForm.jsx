import { useState } from "react"

function TodoForm(props) {

    const [todo, setTodo] = useState({task: "", isComplete: false})

    function handleSubmit(e) {
        e.preventDefault()
        todo.task = todo.task.trim()
        props.setList([...props.todoList, todo])
        setTodo({task: "", isComplete: false})
    }

    return (
        <form className="block is-flex is-justify-content-center" onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input 
                        className="input" 
                        name="todo"
                        value={todo.task}
                        onInput={(e) => {setTodo({task: e.target.value, isComplete: false})}}
                    />
                </div>
                <div className="control">
                    <button className="button is-primary">Add</button>
                </div>
            </div>
        </form>
    )
}

export default TodoForm