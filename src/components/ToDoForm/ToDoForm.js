import { useState } from "react";
import "./ToDoForm.css"

function ToDoForm({ list, setList }) {

  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, task]);
    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };



  return (
    <form onSubmit={handleSubmit} className="tasklist">
      <label htmlFor="task">Inserisci nuovo task:</label>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          onChange={handleChange}
          value={task}
        />
        <button type="submit">
          Invia
        </button>
      </div>
    </form>
  );
}

export default ToDoForm;