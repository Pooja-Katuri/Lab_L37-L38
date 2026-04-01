
import React from "react";

function StudentProfile() {
  const student = {
    name: "Pooja Katuri",
    department: "Computer Science Engineering",
    year: "3rd Year",
    Branch: "CSE"
  };

  return (
    <div style={styles.card}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="profile"
        style={styles.image}
      />

      <h2 style={styles.name}>{student.name}</h2>

      <div style={styles.info}>
        <p>🎓 <b>Department:</b> {student.department}</p>
        <p>📅 <b>Year:</b> {student.year}</p>
        <p>🏫 <b>Branch:</b> {student.Branch}</p>
      </div>

      <button style={styles.button}>View Profile</button>
    </div>
  );
}

const styles = {
  card: {
    width: "320px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "15px",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    color: "white",
    textAlign: "center",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    fontFamily: "Arial"
  },
  image: {
    width: "100px",
    borderRadius: "50%",
    marginBottom: "10px"
  },
  name: {
    margin: "10px 0"
  },
  info: {
    textAlign: "left",
    marginTop: "15px"
  },
  button: {
    marginTop: "15px",
    padding: "8px 15px",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "white",
    color: "#2575fc",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default StudentProfile;