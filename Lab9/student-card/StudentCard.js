import React from "react";

function StudentCard(props) {
  return (
    <div style={styles.card}>
      <h3>{props.name}</h3>
      <p><b>Department:</b> {props.department}</p>
      <p><b>Marks:</b> {props.marks}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "2px solid #4CAF50",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    width: "220px",
    backgroundColor: "#f9fff9",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  }
};

export default StudentCard;