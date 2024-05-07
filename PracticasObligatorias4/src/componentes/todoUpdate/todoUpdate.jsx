import { useState } from "react";
import PropTypes from "prop-types";

const TodoUpdate = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleTaskTextChange = (e) => {
        setTaskText(e.target.value);
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        if (taskText.trim()) {
            addTask(taskText); // Llama a la función addTask pasando el texto de la tarea
            setTaskText(''); // Limpia el campo de texto
        }
    };

    return (
        <div className="todo-update">
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder="Escribe una nueva tarea..."
                    value={taskText}
                    onChange={handleTaskTextChange}
                />
                <button type="submit">Agregar tarea</button>
            </form>
        </div>
    );
};
TodoUpdate.propTypes = {
    addTask: PropTypes.func.isRequired
};

export default TodoUpdate;

