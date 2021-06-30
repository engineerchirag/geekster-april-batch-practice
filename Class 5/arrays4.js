// function to add grace marks to every student
let passing_marks = 33
let marks = [23,24,22,12,18]

let num2 = 8

function addThirty(num) {
  return num + 30
}

console.log("Marks with all got grace marks "+ marks.map(addThirty))


function marksToPass(num) {
  return passing_marks - num
}
console.log("Marks needed to pass "+ marks.map(marksToPass))


function totalSum(total, num) {
  return total + num^2
}

console.log(marks.reduce(totalSum))

