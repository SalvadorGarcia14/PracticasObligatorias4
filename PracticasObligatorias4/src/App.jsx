import TodoList from './componentes/todoList/todoList';

import './App.css'

const App = () => {
  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TodoList />
    </div>
  );
};

export default App;