import { useEffect, useState } from "react";

export default function UseEffectComp() {
    const [page, setPage] = useState(0)
    const [items, setItems] = useState([])
    const [test, setTest] = useState(0);

    useEffect( () => {
        if (page === 0) {
            console.log("No hay pagina cero")
        } else {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => response.json())
            .then(data => data.results)
            .then(results => {
                console.log(results)
                setItems(results)
            })
        }
    }
    , [page])

    const handlePageChange = (newPage) => {
        setPage(newPage);
      };

    return (
        <div>
          <h1>Lista de elementos</h1>
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
            Anterior
          </button>
          <button onClick={() => handlePageChange(page + 1)}>Siguiente</button>
          <button
          onClick={() => {
            setTest(test + 1);
          }}
        >
          Add to test
        </button>
        <p>test: {test}</p>
          <p>pagina: {page}</p>
        </div>
      );
}