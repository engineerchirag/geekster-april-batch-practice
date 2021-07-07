/*
Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Go to the editor
Sample arguments : 'w3resource.com', 'o'
Expected output : 2
*/

function countCharacterInString(inputString, character) {
  let count = 0;
  if (!character) {
    // null, undefined, ""
    return count;
  }
  for (let i = 0; i < inputString.length; i++) {
    if ((inputString[i]).toLowerCase() === character.toLowerCase()) {
      count += 1;
    }
  }
  return count;
}

let result = countCharacterInString("w3resOurce.com", "o");
console.log(result);
