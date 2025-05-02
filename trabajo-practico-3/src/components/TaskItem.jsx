function TaskItem({ tarea, onToggle, onDelete }) {
    return (
    <li style={{ textDecoration: tarea.completado ? 'line-through' : 'none' }}>
        {tarea.texto}
        <button onClick={() => onToggle(tarea.id)}>
        {tarea.completado ? 'Desmarcar' : 'Realizada'}
        </button>
        <button onClick={() => onDelete(tarea.id)}>Eliminar</button>
    </li>
    );
}

export default TaskItem;