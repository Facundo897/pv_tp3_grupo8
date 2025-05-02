import TaskItem from './TaskItem';

function TaskList({ tareas, toggleComplete, removeTask }) {
return (
    <ul className="task-list">
    {tareas.map(tareas => (
      <TaskItem 
        key={tareas.id} 
        tareas={tareas} 
        toggleComplete={toggleComplete} 
        removeTask={removeTask} 
      />
    ))}
  </ul>
);
}

export default TaskList;