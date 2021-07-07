/*
Write a JavaScript function to extract unique characters from a string. Go to the editor
Example string : "thequickbrownfoxjumpsoverthelazydOg"
Expected Output : "thequickbrownfxjmpsvlazydg"
*/

function uniqueCharacters(inputString) {
  let uniqueStringCharacters = [];
  if (!inputString) {
    return inputString;
  }
  for (let i = 0; i < inputString.length; i++) {
    if (!uniqueStringCharacters.includes(inputString[i].toLowerCase())) {
      uniqueStringCharacters.push(inputString[i]);
    }
  }
  return uniqueStringCharacters.join("");
}

let result = uniqueCharacters("thequickbrownfoxjumpsoverthelazydog");
console.log(result);
