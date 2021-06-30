let student_names = ["Kanika", "Bhuvanesh", "Vishwanath", "Lava", "Ash", "Neeraj"] //rollno of that student = index+1
console.log(JSON.stringify(student_names))
student_string = student_names.join("**")
console.log(student_string)
let students_res = student_string.split("**")
console.log(students_res)


let rollno = -2
let student_name = "Manisha"
// char roll = null
// int roll = 0
// int roll[] =[0,0,0,0]

// function input of rollno, return student name
function getStudent (rollno) {
  // if (rollno > student_names.length && rollno > 0) {
  //   return "Not Present"
  // }
  if (student_names[rollno] == undefined) {
    return "Not Present"
  }
  return student_names[rollno - 1]
}

// function input = student name, output = yes or no (yes a student/otherwise)
function isAStudent(student_name) {
  return student_names.includes(student_name)
}



console.log(`Student Name for roll no. ${rollno} is ${getStudent(rollno)}`)
console.log(`Student ${student_name} ${(isAStudent(student_name) ? "exists": "doesn't exist")}`)


// conditional operator (?:)
// (statement) ? (true result) : (false result)
// let res = (1 == 2) ? ("one"): ("two")
// console.log(res)

