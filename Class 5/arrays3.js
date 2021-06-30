let students = [{ age:23, name: "Kanika"}, { age:24, name: "Dhruv"}, { age:23, name: "Lava"}, { age:25, name: "Vaibhav"}, { age:23, name: "Ash"}]
let age = 23


function getStudentByAge(age) {
  return students.filter((student, index) => student.age == age)
}

console.log(getStudentByAge(age))


