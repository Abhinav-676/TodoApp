import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

function TodoApp() {
    const [todoList, setList] = useState([])

    const todoItems = todoList.map((todo, i) => {
        if (todo.task == "") {
            return null
        }
        return <TodoItem key={new Date()} todo={todo} todoList={todoList} setList={setList}/>
    })
  
    return (
        <div id='todo-app' className="box">
            <TodoForm todoList={todoList} setList={setList}/>
            <ol>
                {todoItems}
            </ol>
        </div>
    )
}

export default TodoApp