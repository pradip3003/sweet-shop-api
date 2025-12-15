const BASE = "http://localhost:3001/api/sweets";

export const fetchSweets = async () => {
  const res = await fetch(BASE);
  return res.json();
};

export const addSweet = async (sweet) => {
  await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sweet),
  });
};

export const deleteSweet = async (id) => {
  await fetch(`${BASE}/${id}`, { method: "DELETE" });
};