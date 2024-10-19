import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const App = () => {
    const greetUser = (name) => {
        return \`Hello, \${name}!\`;
    };

    return (
        <div>
            <h1>{greetUser("User")}</h1>
            <p>This is a simple React application.</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
