/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 }
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
    const students = arr.filter(arr => arr.marks > 50);
    const studentNames = students.map(student => student.name);
    console.log("Students by Map: ", students);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  const students = [];
    arr.forEach(function(arr) {
        if (arr.marks > 50) {
            students.push(arr);
        }
    });
    console.log("Students by forEach: ", students);
}

function addData() {
  //Write your code here, just console.log
  const newStudent = {id:4,name:"susan",age:"20",marks:45};
    arr.push(newStudent);
    console.log("Student added: ", newStudent   );
    console.log("New Student array: ", arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  const filteredStudents = arr.filter(arr => arr.marks > 50);
    arr.length = 0; // Clear the original array
    Array.prototype.push.apply(arr, filteredStudents); // Add filtered Students back to the original array
    console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
   const newStudents = [
        { id: 4, name: "Jill", age: "18", marks: 75 },
          { id: 5, name: "Hulk", age: "20", marks: 90 },
          { id: 6, name: "Ackerman", age: "19", marks: 49 }
    ];
    const allStudents = arr.concat(newStudents);
    console.log("Concatenated student array: ", allStudents);
}