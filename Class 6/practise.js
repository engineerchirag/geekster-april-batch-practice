// function , input = > a string, substring, output = > position of substring, -1

let input_str = "Heloohhlollollo"
let substr = "ll"

function find_position_of_substring(input_str) {
  return input_str.search(substr)
}

console.log(`Position of ${substr} in ${input_str} is ${find_position_of_substring(input_str)}`)