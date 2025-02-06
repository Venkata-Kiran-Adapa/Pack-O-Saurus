import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { Form } from "./Form";
import { ItemsList } from "./ItemsList";
import { Footer } from "./Footer";

function App() {
  const [items, setItems] = useState([]);

  function handleonToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleonDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleAddItems(item) {
    setItems(() => [...items, item]);
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <>
      <Header />
      <Form onAddItems={handleAddItems} />
      <ItemsList
        items={items}
        onToggle={handleonToggle}
        onDelete={handleonDelete}
        onClear={handleClearList}
      />
      <Footer items={items} />
    </>
  );
}

export default App;
