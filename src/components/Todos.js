import React, { useState, useReducer } from "react";
import TodoItem from "./TodoItem";

function reducer(todos, action) {
    switch (action.type) {
        case "add-todo":
            return [...todos, addTodo(action.payload.text)];
        case "flip":
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case "delete":
            return todos.filter((todo) => todo.id !== action.payload.id);
        default:
            return todos;
    }
}

function addTodo(text) {
    return { id: Date.now(), text: text, complete: false };
}

function Todos() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [text, setText] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        dispatch({ type: "add-todo", payload: { text: text } });
        setText("");
    }

    return (
        <div className="container d-flex justify-content-center align-items-center flex-column p-3 bg-dark rounded rounded-pill">
            <form onSubmit={handleSubmit} className="input-group btn-group">
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    className="form-control"
                    placeholder="Do something..."
                    aria-label=""
                    aria-describedby="todo-button"
                />
                <button
                    type="Submit"
                    id="todo-button"
                    className="btn btn-primary"
                >
                    Add Todo
                </button>
            </form>

            {todos.map((todo) => {
                return (
                    <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                );
            })}
            <p className="text-light pt-2 m-0">
                Created By Yehezkiel Owen Ombuh with ❤
            </p>
        </div>
    );
}

export default Todos;
