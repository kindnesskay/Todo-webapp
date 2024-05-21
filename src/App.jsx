import { useEffect, useState } from "react";
import Form from "./components/Form";
import Hero from "./components/Hero";
import TaskList from "./components/TaskList";
import DatabaseManager from "./lib/localStorage.js";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const db_name = "tasks_v1";
  const db = new DatabaseManager(db_name);
  const handleSubmit = (title) => {
    const Template = {
      title,
      id: crypto.randomUUID(),
      done: false,
      date: new Date().toLocaleDateString(),
    };
    const new_item = db.save(Template);
    if (!new_item) return;
    setTasks([...tasks, Template]);
  };
  function handleDelete(id) {
    db.remove(id);
    const new_task_list = tasks.filter((item) => item.id !== id);
    setTasks(new_task_list);
  }
  function handleEdit(id, text) {
    const edit = {
      title: text,
      id,
      done: false,
      date: new Date().toLocaleDateString(),
    };
    const res = db.edit(id, edit);
    console.log(res);
    if (!res) return;
    const new_task_list = tasks.filter((item) => item.id !== id);
    setTasks([...new_task_list, edit]);
  }
  useEffect(() => {
    const get_data = db.getAllData();
    if (get_data) {
      setTasks(get_data);
    }
  }, []);
  return (
    <section className="flex min-h-screen justify-center bg-slate-100">
      <div className="w-full p-4 flex flex-col gap-2  min-h-screen max-w-xl">
        <Hero />
        <Form handleSubmit={handleSubmit} />
        <TaskList
          tasks={tasks}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </section>
  );
};
export default App;
