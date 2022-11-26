import "./ToDoList.css";


function ToDoList({ list, setList }) {

  const handleDelete = (e) => {
    let arrayAppoggio = [...list];
    arrayAppoggio.splice(e.target.id, 1);
    setList(arrayAppoggio);
  }

  const handleEdit = (e, i) => {
    let arrayEditor = [...list];
    arrayEditor[i] = e.target.value;
    setList(arrayEditor)
  }

  const handleModifica = (e, i) => {
    let stato = document.getElementById("input" + i).disabled;
    if (stato) {
      document.getElementById("input" + i).disabled = false;
      e.target.value = "Disabilita"
    } else {
      document.getElementById("input" + i).disabled = true;
      e.target.value = "Modifica"
    }
  }

  return (
    <>
      <p>Hai in programma <b>{list.length} </b>impegni</p>
      <ul>
        {list.map((elem, i) => (
          <li key={i}>
            <input type="text" value={elem} onChange={(e) => handleEdit(e, i)} disabled={true} id={"input" + i} />
            {/* così posso passare non solo l'evento ma anche una variabile (l'indice, richiamato solo all'iinterno alla funzione) */}
            <button onClick={handleDelete} id={i}>X
            </button>
            <input type="button" value="Modifica" onClick={(e) => handleModifica(e, i)} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;