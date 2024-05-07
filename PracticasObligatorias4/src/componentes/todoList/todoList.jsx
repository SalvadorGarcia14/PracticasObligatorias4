import { useState } from "react";
import TodoItem from "../todoItem/todoItem";

const TodoList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Ir al Super", completed: false },
        { id: 2, text: "Trabajar", completed: true }
    ]);

    const addTask = (text) => {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const toggleCompleted = (taskId) => {
        setTasks(
            tasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="todo-list">
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={addTask}
                    onDelete={deleteTask}
                    onToggleCompleted={toggleCompleted}
                />
            ))}
        </div>
    );
};

export default TodoList;