function SweetCard({ sweet, onRemove }) {
  return (
    <div>
      <h3>{sweet.name}</h3>
      <p>Price: ₹{sweet.price}</p>
      <button onClick={() => onRemove(sweet.id)}>Remove</button>
    </div>
  );
}

export default SweetCard;

