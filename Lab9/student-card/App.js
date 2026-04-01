import React from "react";
import StudentCard from "./StudentCard";

function App() {

  // Student data (dynamic)
  const students = [
    { name: "Pooja", department: "CSE", marks: 90 },
    { name: "Rahul", department: "ECE", marks: 85 },
    { name: "Anjali", department: "IT", marks: 92 }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Cards</h1>

      <div style={styles.container}>
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            department={student.department}
            marks={student.marks}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
};

export default App;