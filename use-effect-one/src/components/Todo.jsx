import { useState, useEffect } from "react"

export const Todo = () => {
    const [text, setText] = useState("")
    const [list, setList] = useState([])

    const [page, setPage] = useState(1)

  useEffect(() => {
    getTodo();
  },[page]);

    const getTodo = () => {
        fetch(`http://localhost:3001/todos?_page=${page}&_limit=5`)
          .then((d) => d.json())
          .then((res) => {
            setList(res);
    
          });
      };

    const handleTodo = () => {
        const payload = {
          title: text,
          status: false,
        };
        fetch("http://localhost:3001/todos", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "content-type": "application/json",
          },
        }).then(() => {
          getTodo();
          setText("")
        });
      };
    

    return(
        <div>
            <input type="text" value={text} name="" id="" onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleTodo}>Add Todo</button>
            <br /><br />

            {list.map((e, i) => (
                <div key={i}>{e.title}</div>
            ))}

            <br /><br />

            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>

        </div>
    )
}