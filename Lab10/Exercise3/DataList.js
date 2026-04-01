import React from "react";

function DataList({ data }) {
  return (
    <div>
      {data.map((user) => (
        <div key={user.id} style={styles.card}>
          <h3>{user.name}</h3>
          <p><b>Email:</b> {user.email}</p>
          <p><b>City:</b> {user.address.city}</p>
          <p><b>Company:</b> {user.company.name}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    margin: "10px 0",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  }
};

export default DataList;