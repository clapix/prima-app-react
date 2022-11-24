import "./ToDoList.css";

function ToDoList({ list }) {
  return (
    <>
      <p>Hai in programma <b>{list.length} </b>impegni</p>
      <ul>
        {list.map((elem, i) => (
          <li key={i}>{elem}<button>X</button></li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;