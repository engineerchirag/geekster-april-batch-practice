const marks1 = 45
const marks2 = 22

function check_if_pass(marks) {
  if (marks > 33) {
    return 'pass'
  } else {
    return 'fail'
  }
}

// console.log(`Student with ${marks1} is ${check_if_pass(marks1)}`)
// console.log(`Student with ${marks2} is ${check_if_pass(marks2)}`)

// console.log(Number.isInteger(-90))
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.POSITIVE_INFINITY)

// console.log(Number.isNaN(12))
// console.log(Number.isNaN("hello"))
// console.log(typeof(check_if_pass(marks2)))
// console.log(Number.isNaN)

let a = 9
let b = 0
let c = 0

console.log(a / b)
console.log(Number.isNaN(a / b))
console.log(b / c)
console.log(Number.isNaN(b / c))
