import Task from "./Task";
export default function TaskList({ tasks, handleDelete, handleEdit }) {
  if (!tasks.length > 0) {
    return (
      <p className="p-4 text-center text-xl text-gray-400 font-semibold">
        You Have No Task Runnig
      </p>
    );
  }

  return (
    <div>
      {tasks &&
        tasks.map((task) => {
          return (
            <Task
              data={task}
              key={task.id}
              handleDelete={() => handleDelete(task.id)}
              handleEdit={handleEdit}
            />
          );
        })}
    </div>
  );
}
