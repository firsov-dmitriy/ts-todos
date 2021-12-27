import React from "react";
import TodoItems from "./components/TodoList/TodoItems";
import FormAddTodo from "./components/Form/FormAddTodo";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <FormAddTodo />
                <TodoItems />
            </div>
        </>
    );
}

export default App;
