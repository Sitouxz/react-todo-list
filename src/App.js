import React from "react";
import Todos from "./components/Todos";
import Header from "./components/Header";

function App() {
    return (
        <div className="d-flex flex-column h-100">
            <Header />
            <Todos />
        </div>
    );
}

export default App;
