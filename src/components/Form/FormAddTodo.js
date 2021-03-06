import React, { useState } from "react";

function FormAddTodo() {
    return (
        <form className="mt-3">
            <div className="input-group mb-3">
                <div className="input-group-text">
                    <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                    />
                </div>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with checkbox"
                    placeholder="Add new todo"
                />
            </div>
        </form>
    );
}

export default FormAddTodo;
