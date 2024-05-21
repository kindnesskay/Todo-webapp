import { useState } from "react";

export default function Form({ handleSubmit }) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!title) return;
    handleSubmit(title);
    setTitle("");
    setShowForm(false);
  }

  return (
    <div className="flex h-20">
      <form
        className={`transition-all flex overflow-hidden  items-end h-full p-1 
        ${showForm ? "w-full" : "w-0"}`}
        onSubmit={handleFormSubmit}
      >
        <label htmlFor="title" className="font-semibold text-lg w-full hidden">
          Add Todo
        </label>
        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="tite"
          value={title}
          className="  rounded-l-2xl w-full text-2xl p-4 h-full focus:ring-0 focus:border-0 "
        />
        <button
          type="submit"
          className=" rounded-r-2xl p-2 px-4 h-full text-white bg-indigo-700 font-semibold"
        >
          Done
        </button>
      </form>
      <button
        className={`${
          showForm ? "hidden" : "block"
        }  p-2 text-white bg-indigo-700 font-semibold rounded-md hover:bg-indigo-600 hover:transition-colors transition-colors h-16`}
        onClick={() => setShowForm(true)}
      >
        Create Task
      </button>
    </div>
  );
}
