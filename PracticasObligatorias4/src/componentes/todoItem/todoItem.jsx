import PropTypes from "prop-types";

const TodoItem = ({ task, onDelete, onToggleCompleted }) => {
    return (
        <div className="todo-item">
            <span
                className={`task-text ${task.completed ? 'completed' : ''}`}
                onClick={() => onToggleCompleted(task.id)}
            >
                {task.text}
            </span>
            <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </div>
    );
};

TodoItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }),
    onDelete: PropTypes.func.isRequired,
    onToggleCompleted: PropTypes.func.isRequired
};

export default TodoItem;