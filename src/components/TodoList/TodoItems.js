import React, { useEffect } from "react";

import FormAddTodo from "../Form/FormAddTodo";
import { useSelector } from "react-redux";

function TodoItems() {
    const dispatch = useDispatch(function)
    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        dis
    });

    return (
        <div>
            <FormAddTodo />
            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoItems;
