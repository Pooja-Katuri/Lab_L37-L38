const getMarks = () => {
    let name = document.getElementById("name").value;
    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    return { name, m1, m2, m3 }; 
};

const calculateTotal = () => {
    const { name, m1, m2, m3 } = getMarks(); 
    const total = m1 + m2 + m3;
    document.getElementById("result").innerHTML = `
        Student Name: ${name} <br>
        Total Marks: ${total}
    `;
};

const calculateAverage = () => {
    const { name, m1, m2, m3 } = getMarks();
    const avg = ((a, b, c) => (a + b + c) / 3)(m1, m2, m3);
    document.getElementById("result").innerHTML = `
        Student Name: ${name} <br>
        Average Marks: ${avg.toFixed(2)}
    `;
};