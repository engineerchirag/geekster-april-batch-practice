/*
Write a Javascript function to check if paranthesis is balanced or not
Example string: "((()))[]"
Expected output : true

Example string: "((())[]"
Expected output : false

Example string: "((({}())))"
Expected output : true
*/

function checkParanthesis(inputString) {
  let stack = [];
  if (!inputString) {
    return false;
  }
  for (let i = 0; i < inputString.length; i++) {
    // (, {, [
    if (
      inputString[i] === "(" ||
      inputString[i] === "[" ||
      inputString[i] === "{"
    ) {
      stack.push(inputString[i]);
    } else {
      if (stack.length) {
        let popedItem = stack.pop();
        if (
          (popedItem === "(" && inputString[i] === ")") ||
          (popedItem === "[" && inputString[i] === "]") ||
          (popedItem === "{" && inputString[i] === "}")
        ) {
          continue;
        } else {
          return false;
        }
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
}

let result = checkParanthesis("((({}())))");
console.log(result);
