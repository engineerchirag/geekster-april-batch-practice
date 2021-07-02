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
var states = {
  "delhi" : {
    "cp" : "foodie special",
    "janpath" : "shopping spot",
    "sarojini" : "cheap and best"
  },
  "bangalore" : {
    "hsr layout": "pgs and hostels k lie bessst hai!",
    "kormangala" : "soooo many startups!!",
  },
  "hyderabad": {
    "lb city": "cheap cheap",
    "electronic city": "msst msst offices"
  },
  "agra": {
    "landmark1": "NA",
    "landmark2": "NA"
  }
}

for (let state in states) {
  let vowels = ['a','e','i','o','u']
  if (vowels.includes(state.charAt(0))) {
    console.log(state);
  }
}