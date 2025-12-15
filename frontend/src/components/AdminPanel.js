import React, { useState } from "react";

function AdminPanel({ onAdd }) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name) return;
    onAdd({ name });
    setName("");
  };

  return (
    <div className="admin">
      <h2>Admin Panel</h2>

      <div className="admin-row">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={handleSubmit}>Add Sweet</button>
      </div>
    </div>
  );
}

export default AdminPanel;
