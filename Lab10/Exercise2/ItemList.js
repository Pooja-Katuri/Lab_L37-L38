import React from "react";

function ItemList({ items, removeItem }) {
  return (
    <div>
      {items.length === 0 ? (
        <p style={{ color: "gray" }}>No items available</p>
      ) : (
        items.map((item) => (
          <div style={styles.item} key={item.id}>
            <span>{item.text}</span>
            <button style={styles.removeBtn} onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    margin: "5px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9"
  },
  removeBtn: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default ItemList;