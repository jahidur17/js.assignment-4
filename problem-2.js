function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let character = str.toUpperCase();
  let noSpace = character.split(" ").join("");
  return noSpace;
}

const result = onlyCharacter("jahid");
console.log(result);
