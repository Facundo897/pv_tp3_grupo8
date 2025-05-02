import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    const nuevaTarea = { id: Date.now(), texto, completado: false };
    setTareas([...tareas, nuevaTarea]);
  };

  const toggleTarea = (id) => {
    setTareas(
      tareas.map((t) => t.id === id ? { ...t, completado: !t.completado } : t)
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Lista de Tareas</h1>
      <TaskInput onAdd={agregarTarea} />
      <TaskList tareas={tareas} toggleComplete={toggleTarea} removeTask={eliminarTarea} />
    </div>
  );
}

export default App;