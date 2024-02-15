// utility class for stlying completed todo
let classComplete

function TodoItem(props) {
    function handleDelete() {
        const todoList = Array.from(props.todoList)
        const index = todoList.indexOf(props.todo)
        todoList.splice(index, 1)

        props.setList(todoList)
    }

    function handleComplete() {
        const todoList = Array.from(props.todoList)
        const index = todoList.indexOf(props.todo)
        todoList[index].isComplete = true;

        props.setList(todoList)
    }

    setClassComplete(props.todo.isComplete)

    return (
        <li className="block">
        <div className={"pb-1" + classComplete}>
            {props.todo.task}
        </div>
        <div>
            <button type="button" onClick={handleComplete} className="button is-small is-success is-outlined mr-2">Complete</button>
            <button type="button" onClick={handleDelete} className="button is-small is-danger is-outlined">Delete</button>
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