// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ArtikelDetail from "./ArtikelDetail"; // Import ArtikelDetail dari folder yang sama

function Main() {
    return (
        <div>
            <ArtikelDetail />
        </div>
    );
}

// Render ke root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
