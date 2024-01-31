import { useState } from "react";
import "./App.css";
import { Item } from "./components/Item";
import { ItemForm } from "./components/ItemForm";
import { ItemEdit } from "./components/ItemEdit";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState([
    {
      id: uuid(),
      task: "Buy some potato",
    },
    {
      id: uuid(),
      task: "Go home",
    },
    {
      id: uuid(),
      task: "Sleep",
    },
    {
      id: uuid(),
      task: "Sleep more",
    },
    {
      id: uuid(),
      task: "Sleep MORE!!!",
    },
    {
      id: uuid(),
      task: "Sleep much more!",
    },
  ]);

  const [editItemId, setEditItemId] = useState(null);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (id, newData) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, ...newData } : item))
    );
    setEditItemId(null); // Закрываем форму редактирования после сохранения изменений
  };

  return (
    <>
      <h1>to do app</h1>
      <ItemForm
        addItem={(newItem) => setItems([...items, { id: uuid(), ...newItem }])}
      />
      <div className="items">
        {items.map((item) => (
          <div key={item.id} style={{ position: "relative" }}>
            <Item
              id={item.id}
              task={item.task}
              removeItem={removeItem}
              startEditing={() => setEditItemId(item.id)} // Открываем форму редактирования по нажатию на кнопку
            />
            {editItemId === item.id && (
              <ItemEdit
                id={item.id}
                task={item.task}
                editItem={editItem}
                onClose={() => setEditItemId(null)} // Закрываем форму редактирования по нажатию на кнопку "Сохранить"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
