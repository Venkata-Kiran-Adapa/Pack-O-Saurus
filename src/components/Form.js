import { useState } from "react";

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, packed: false, quantity };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <div
      className="d-flex flex-column flex-md-row p-3 justify-content-center"
      style={{ backgroundColor: "orange" }}
    >
      <p className="m-2"> What do you need for your 😍 trip? </p>
      <form
        className="d-flex flex-column flex-md-row align-items-center justify-content-center"
        onSubmit={handleSubmit}
      >
        <select
          className="form-select w-md-25 m-2"
          aria-label="Default select example"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="form-control m-2 w-md-50"
          id="itemEnterLabel"
          placeholder="Enter Item...!"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className=" m-2 btn btn-primary"
          placeholder="submit"
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}
