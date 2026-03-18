// Get input values and create object
function getStudent() {
    let id = Number(document.getElementById("id").value);
    let name = document.getElementById("name").value;
    let department = document.getElementById("dept").value;
    let marks = Number(document.getElementById("marks").value);

    return { id, name, department, marks };
}

// Show details using destructuring
function showDetails() {
    const student = getStudent();

    const { id, name, department, marks } = student;

    document.getElementById("output").innerHTML = `
        ID: ${id} <br>
        Name: ${name} <br>
        Department: ${department} <br>
        Marks: ${marks}
    `;
}

// Show updated object using spread operator
function showUpdated() {
    const student = getStudent();

    // Simple grade logic
    let grade = student.marks >= 90 ? "A" :
                student.marks >= 75 ? "B" : "C";

    const updatedStudent = {
        ...student,
        grade: grade
    };

    document.getElementById("output").innerHTML = `
        ID: ${updatedStudent.id} <br>
        Name: ${updatedStudent.name} <br>
        Department: ${updatedStudent.department} <br>
        Marks: ${updatedStudent.marks} <br>
        Grade: ${updatedStudent.grade}
    `;
}