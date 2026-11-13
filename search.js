function search() {
    let roll = document.getElementById("searchRoll").value;

    let student = students.find(s => s.roll === roll);

    if (student) {
        document.getElementById("result").innerHTML =
            "Name: " + student.name +
            ", Roll: " + student.roll;
    } else {
        document.getElementById("result").innerHTML =
            "Student not found";
    }
}