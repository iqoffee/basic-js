const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  result = 0;
  for (i of matrix) {
    for(l of i){
      if (l == "^^"){
        result +=1
      }
    }    
  }
  return result
};
