var students = [];
function submit(){
    var one = document.getElementById("student-1").value;
    var two = document.getElementById("student-2").value;
    var three = document.getElementById("student-3").value;
    var four = document.getElementById("student-4").value;

    students.push(one);
    students.push(two);
    students.push(three);
    students.push(four);

    console.log(students);
    document.getElementById("display_answer").innerHTML = students;

    document.getElementById("submitbtn").style.display = "none";
    document.getElementById("sortbtn").style.display = "inline-block";

}

function sort(){
    students.sort()
    console.log(students);
    document.getElementById("display_answer").innerHTML = students;
    document.getElementById("submitbtn").style.display = "inline-block";
    document.getElementById("sortbtn").style.display = "block";
}