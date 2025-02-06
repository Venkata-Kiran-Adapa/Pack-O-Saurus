import { useState } from "react";
import { Items } from "./Items";

export function ItemsList({ items, onToggle, onDelete, onClear }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div
      style={{
        backgroundColor: "rgb(90, 62, 43)",
        flex: "1",
      }}
    >
      <ul
        className=" row mx-md-5  px-md-5  justify-content-center"
        style={{ listStyle: "none" }}
      >
        {sortedItems.map((item) => (
          <Items
            items={item}
            onToggle={onToggle}
            onDelete={onDelete}
            key={item.id}
          />
        ))}
      </ul>

      <div className="d-flex justify-content-center">
        <select
          className="form-select w-25 m-2"
          aria-label="Default select example"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="btn btn-primary my-2" onClick={onClear}>
          Clear list
        </button>
      </div>
    </div>
  );
}
