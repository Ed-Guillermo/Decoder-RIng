
const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let final = "";
    let normalAlphabets = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();
    // input = input.toLowerCase();
    // your solution code here
    console.log(input);
    console.log(alphabet);
//this function checks if str has an unique characters
    function is_unique(str) {
      var obj = {};
      for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (obj[char]) return false;
        else obj[char] = true;
      }
      return true;
    }
//this part is to for substitution and error handling
    try {
      if (!alphabet || alphabet.length !== 26 || !is_unique(alphabet)) {
        throw false;
      } else if (encode) {
        for (let i = 0; i < input.length; i++) {
          let index = normalAlphabets.indexOf(input[i]);
          console.log(index);
          if (index === -1 && input[i] === " ") {
            final += " ";
          } else {
            final += alphabet[index];
          }
        } //if encode is false, it'll do decode instead
      } else if (!encode) {
        for (let i = 0; i < input.length; i++) {
          let index = alphabet.indexOf(input[i]);
          console.log(index);
          if (index === -1 && input[i] === " ") {
            final += " ";
          } else {
            final += normalAlphabets[index];
          }
        }
      }
      return final;
    } catch (error) {
      return error;
    }
  }

  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };
