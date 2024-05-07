// TodoList.js
import { useState } from "react";
import TodoItem from "../todoItem/todoItem";
import TodoUpdate from "../todoUpdate/todoUpdate";

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
            <TodoUpdate addTask={addTask} /> {/* Pasa la función addTask */}
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    onDelete={deleteTask}
                    onToggleCompleted={toggleCompleted}
                />
            ))}
        </div>
    );
};

export default TodoList;
