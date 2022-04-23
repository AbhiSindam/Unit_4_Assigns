import { useState } from "react"
import { Todo } from "./Todo"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
    const [list, setList] = useState([])

    const handleClick = (data) => {
        const payload = {
            title: data
        }
        setList([...list, payload])
    }
    console.log(list)
    return (
        <div>
            <Todo getData={handleClick}/>

            {list.map((e) => (
                <TodoItem key={e} title={e.title} />
            ))}

        </div>
    )
}