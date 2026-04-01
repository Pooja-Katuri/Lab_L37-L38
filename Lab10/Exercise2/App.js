import React, { useState } from "react";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    if (input.trim() === "") return;

    const newItem = {
      id: Date.now(),
      text: input
    };

    setItems([...items, newItem]);
    setInput("");
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📝 Item List</h2>

        <div style={styles.inputBox}>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Enter item"
            style={styles.input}
          />
          <button onClick={addItem} style={styles.addBtn}>
            Add
          </button>
        </div>

        <ItemList items={items} removeItem={removeItem} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
    fontFamily: "Arial"
  },
  card: {
    width: "350px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
  },
  title: {
    textAlign: "center",
    marginBottom: "15px"
  },
  inputBox: {
    display: "flex",
    marginBottom: "15px"
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  addBtn: {
    marginLeft: "5px",
    padding: "8px 12px",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default App;