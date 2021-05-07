
const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // The plan is to have an array that has the entire alphabet
    //Then split input, locate where input whould be in alphaArr. and shift either to the left or right
    if(!shift || shift == 0 || shift < -25 || shift > 25) return false;
    let newShift = (encode == false) ? shift * -1 : shift;
    // console.log(newShift)
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //splitting input into array
  let holdAnswer = []
  //turning alphabet/input into all capitals
  let newStr = input.toLowerCase().split("");
    let holder = [];
    let holderA = [];
  // console.log(newStr)
  //match input to newStr and return an array that holds the indexes of those matches
  // console.log(alphabet.length)
  for(let a = 0; a < newStr.length; a++){
  holderA.push(alphabet.indexOf(newStr[a]))
  }
  // let codeForZ = "z".
  // console.log(holderA)
  for(let i = 0; i < newStr.length; i++){
  holder.push(alphabet.indexOf(newStr[i])+newShift);
  }
  // console.log(holder)
  let golder =[]
  let newHolder = holder.map(hold=>{
    if(hold>=26){
      return hold-26;
    }
    return hold;
  })

  // console.log(newHolder)
  //Proxy is about being able to iterate in both directions
  const proxy = new Proxy(alphabet, {
    get(target, prop) {
        if (!isNaN(prop)) {
            prop = parseInt(prop, 10);
            if (prop < 0) {
                prop += target.length;
            }
        }
        return target[prop];
    }
});
// console.log(proxy[0])
  for(let j = 0; j < holder.length; j++) {
    holdAnswer.push(proxy[newHolder[j]]);
  }
  // console.log(holdAnswer)
  //got the answer in array form
  //this below will transform it into the proper string
let theAnswer;
let special;
let regex = /[!@#$%^&*(),.?' ':{}|<>]/g;
let re = new RegExp(regex,'gi');
let results = new Array();//this is the results you want
while (re.exec(input)){
  results.push(re.lastIndex -1);
}
let maybeAnswer = holdAnswer.join("")
// console.log(maybeAnswer)
special = results;
// console.log(special)
let finalAnswer;
//this part will swap holdAnswer elements with newStr elements
  for(let y = 0; y < holdAnswer.length; y++){
    if(special.length < 1 || special == undefined){
      finalAnswer = maybeAnswer;
    }else if(newStr[special[y]] != holdAnswer[special[y]]){
      holdAnswer[special[y]] = newStr[special[y]];
      finalAnswer = holdAnswer.join('');
    }
  }
  return finalAnswer;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
