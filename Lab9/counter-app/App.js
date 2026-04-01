import React, { useState } from "react";

function App() {
  // 1,2,3: useState with initial value
  const [count, setCount] = useState(0);

  // 6: Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // 7: Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🔢 Counter App</h1>

        {/* 4: Display dynamic value */}
        <h2 style={styles.count}>{count}</h2>

        <div>
          {/* 5,9: Button with onClick */}
          <button style={styles.button} onClick={increment}>
            ➕ Increment
          </button>

          <button style={styles.button} onClick={decrement}>
            ➖ Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

// Styling (clean UI)

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#eef2f7",
    fontFamily: "Arial"
  },
  card: {
    padding: "30px",
    borderRadius: "15px",
    backgroundColor: "white",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "300px"
  },
  title: {
    marginBottom: "20px"
  },
  count: {
    fontSize: "40px",
    margin: "20px 0",
    color: "#2575fc"
  },
  button: {
    margin: "10px",
    padding: "10px 15px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#2575fc",
    color: "white"
  }
};

export default App;