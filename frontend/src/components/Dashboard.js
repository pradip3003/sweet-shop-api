import React, { useState } from "react";
import SweetCard from "./SweetCard";
import AdminPanel from "./AdminPanel";

const initialSweets = [
  { id: 1, name: "Gulab Jamun" },
  { id: 2, name: "Laddu" },
  { id: 3, name: "Barfi" },
  { id: 4, name: "Jalebi" },
  { id: 5, name: "Kajuldi" },
  { id: 6, name: "Rasgulla" },
  { id: 7, name: "Mysore Pak" },
  { id: 8, name: "Kaju Katli" },
];

function Dashboard() {
  const [sweets, setSweets] = useState(initialSweets);

  const addSweet = (sweet) => {
    setSweets([...sweets, { ...sweet, id: Date.now() }]);
  };

  const deleteSweet = (id) => {
    setSweets(sweets.filter((s) => s.id !== id));
  };

  return (
    <div className="container">
      <h2>Available Sweets</h2>

      <div className="grid">
        {sweets.map((sweet) => (
          <SweetCard
            key={sweet.id}
            sweet={sweet}
            onDelete={deleteSweet}
          />
        ))}
      </div>

      <AdminPanel onAdd={addSweet} />
    </div>
  );
}

export default Dashboard;
