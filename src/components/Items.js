export function Items({ items, onToggle, onDelete }) {
  return (
    <li className="col-xs-1  p-2 h-25 col-md-6  col-lg-3">
      <div className="d-flex justify-content-between align-items-center">
        <input
          className="form-check-input"
          type="checkbox"
          value={items.packed}
          onChange={() => onToggle(items.id)}
        />
        <span
          className="fw-bold text-warning"
          style={items.packed ? { textDecoration: "line-through" } : {}}
        >
          {items.quantity} {items.description}
        </span>
        <button className="btn" onClick={() => onDelete(items.id)}>
          ❌
        </button>
      </div>
    </li>
  );
}
