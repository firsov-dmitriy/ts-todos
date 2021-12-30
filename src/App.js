import React from "react";
import TodoItems from "./components/TodoList/TodoItems";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <TodoItems />
            </div>
        </>
    );
}

export default App;
