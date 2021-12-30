import React, { useEffect } from "react";

import FormAddTodo from "../Form/FormAddTodo";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducers/reducer";
import getTodo from "../../service/service";

function TodoItems() {
    const dispatch = useDispatch(addTodo());
    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        getTodo("https://jsonplaceholder.typicode.com/todos").then((data) =>
            dispatch(data)
        );
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
