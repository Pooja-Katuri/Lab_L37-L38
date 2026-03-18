class Course {
    constructor(courseName, instructor) {
        this.courseName = courseName;
        this.instructor = instructor;
    }

    displayCourse() {
        return `Course: ${this.courseName} <br> Instructor: ${this.instructor}`;
    }
}

// Get input
const getCourse = () => {
    const courseName = document.getElementById("course").value;
    const instructor = document.getElementById("instructor").value;
    const seats = Number(document.getElementById("seats").value);

    return { courseName, instructor, seats };
};

// Show course
const showCourse = () => {
    const { courseName, instructor } = getCourse();

    const course = new Course(courseName, instructor);

    document.getElementById("output").innerHTML = course.displayCourse();
};

// Enrollment logic
const enroll = () => {
    const { seats } = getCourse();

    const enrollCourse = new Promise((resolve, reject) => {
        if (seats > 0)
            resolve("Enrollment Successful");
        else
            reject("Course Full");
    });

    enrollCourse
        .then(msg => {
            document.getElementById("output").innerHTML += `<br>${msg}`;
        })
        .catch(err => {
            document.getElementById("output").innerHTML += `<br>${err}`;
        });
};