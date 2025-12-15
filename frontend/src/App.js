import React from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <h1>SWEET SHOP</h1>
        <button className="admin-btn">Admin</button>
      </header>

      <Dashboard />
    </div>
  );
}

export default App;

