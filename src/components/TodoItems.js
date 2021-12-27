import React, { useEffect, useState } from "react";
import getTodo from "../service/service";

function TodoItems() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodo("https://jsonplaceholder.typicode.com/todos")
            .then((data) => setTodos(data))
            .catch((err) => console.error(err));
    });
    const removeItem = (eve) => {
        console.log(eve.target.parentElement.key);
    };

    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <li className="list-group-item d-inline-flex" key={todo.id}>
                    {todo.title.toUpperCase()}
                    <button
                        onClick={(eve) => removeItem(eve)}
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                    ></button>
                </li>
            ))}
        </ul>
    );
}

export default TodoItems;
