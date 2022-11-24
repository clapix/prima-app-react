import "./Todo.css"
import { useState } from "react"

function Todo() {
  let listaReset = ["Task1", "Task2"]
  const [lista, setLista] = useState([listaReset])
  const [valore, setValore] = useState("")

  const handleChange = (e) => {
    setValore(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(lista);
    setLista([...lista, valore])
    setValore("")
  }


  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="todo-form">
          <input type="text" id="todo-input" name="" onChange={handleChange} value={valore} className="todo-input" />
          <button type="submit">
            Aggiungi
          </button>
        </form>
        <ul id="todo-list">
          {lista.map((value, index) => (
            <li key={index}>{value} <button id="delete-button">X</button></li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Todo;