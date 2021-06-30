// function to get student with given rollno

const students = {
  1: {
    "name": "Kanika",
    "age": 23
  },
  2: {
    "name": "Lava",
    "age": 23
  },
  3: {
    "name": "Ash",
    "age": 24
  },
  4: {
    "name": "Vishwanath",
    "age": 21
  }
}
let rollno = 1

function getStudentWithRollNo (rollno) {
  return JSON.stringify(students[rollno])
}
console.log( `Student with ${rollno} is ${getStudentWithRollNo(rollno)}`)

function getStudentWithName(name) {
  
}

let name = "Lava"
console.log(`Student with ${name} is ${getStudentWithName(name)}`)

// hint for ques one of assignment
// let obj = {a:1, b:2}
// console.log(obj)
// obj["c"] = 3
// console.log(obj)
