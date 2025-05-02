function TaskItem({ tareas, toggleComplete, removeTask }) {
    return (
    <li style={{ textDecoration: tareas.completado ? 'line-through' : 'none' }}>
        {tareas.texto}
        <button onClick={() => toggleComplete(tareas.id)}>
        {tareas.completado ? 'Desmarcar' : 'Realizada'}
        </button>
        <button onClick={() => removeTask(tareas.id)}>Eliminar</button>
    </li>
    );
}

export default TaskItem;