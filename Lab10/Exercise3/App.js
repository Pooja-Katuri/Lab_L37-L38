import React, { useState, useEffect } from "react";
import DataList from "./DataList";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>User Directory</h2>

      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && <DataList data={data} />}
    </div>
  );
}

const styles = {
  container: {
    width: "450px",
    margin: "20px auto",
    fontFamily: "Arial"
  },
  title: {
    textAlign: "center",
    marginBottom: "15px"
  }
};

export default App;