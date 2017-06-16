var numberFactors = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
var romanFactors = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

var RomanNumerals = {
  toRoman: function(n){
    var tempArr = [];
    while(n > 0){
      for(var i = 0; i < numberFactors.length; i++){
        while(n - numberFactors[i] >= 0){
          n -= numberFactors[i]
          tempArr.push(romanFactors[i])
        }
      }
    }
    return tempArr.join("");
  },
  fromRoman: function(s){
    var solution = 0;
    s.split("").map(function(x, i, arr){
      if(x === "M" && arr[i - 1] !== "C"){
        solution += 1000
      } else if(x === "M" && arr[i - 1] === "C"){
        solution += 900;
      } else if(x === "D" && arr[i - 1] !== "C"){
        solution += 500
      } else if(x === "D" && arr[i - 1] === "C"){
        solution += 400
      } else if(x === "C" && arr[i - 1] !== "X"){
        solution += 100
      } else if(x === "C" && arr[i - 1] === "X"){
        solution += 90
      } else if(x === "L" && arr[i - 1] !== "X"){
        solution += 50
      } else if(x === "L" && arr[i - 1] === "X"){
        solution += 40
      } else if(x === "X" && arr[i - 1] !== "I"){
        solution += 10
      } else if(x === "X" && arr[i - 1] === "I"){
        solution += 9
      } else if(x === "V" && arr[i - 1] !== "I"){
        solution += 5
      } else if(x === "V" && arr[i - 1] === "I"){
        solution += 4
      } else if(x === "I" && arr[i + 1] !== "V"){
        solution += 1
      }
    })
    return solution;
  }
}
