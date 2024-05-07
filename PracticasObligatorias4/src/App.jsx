import TodoList from './componentes/todoList/todoList';
import TodoUpdate from './componentes/todoUpdate/todoUpdate';

import './App.css'

const App = () => {
  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TodoUpdate /> {/* Aquí renderizamos el componente TodoUpdate solo una vez */}
      <TodoList />
    </div>
  );
};

export default App;