import { useState } from 'react';

function TaskInput({ onAdd }) {
const [taskName, setTaskName] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
    onAdd(taskName);
    setTaskName('');
    }
};

return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="taskInput">Nueva tarea:</label>
    <input
        id="taskInput"
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Agregar nueva tarea"
    />
    <button type="submit">Agregar</button>
    </form>
);
}

export default TaskInput;
