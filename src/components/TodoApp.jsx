import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

function TodoApp() {
    const [todoList, setList] = useState([])

    function addTodo(todo) {
        setList(prevState => [...prevState, todo])
    }

    function deleteTodo(id) {
        setList(prevState => prevState.filter(t => t.id != id))
    }

    const todoItems = todoList.map((todo) => {
        if (todo.task == "") {
            return null
        }
        return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
    })
  
    return (
        <div id='todo-app' className="box">
            <TodoForm addTodo={addTodo}/>
            <ol>
                {todoItems}
            </ol>
        </div>
    )
}

export default TodoApp