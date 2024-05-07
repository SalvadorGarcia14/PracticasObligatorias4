
const todoItem = ({task, onDelete, onToggleCompleted}) => {
    return(
        <div className="todo-item">
        <span
            className={'task-text ${task.Completed ? "Completed" : ""} '}
            onClick={() => onToggleCompleted(task.id)}
        ></span>
        {task.text} 
        <button onClick={() => onDelete(task.id)}> Eliminar Tarea</button>
        </div>
    );
}

export default todoItem