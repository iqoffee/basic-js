const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(matrix) {
  if (typeof(matrix) != "object" || matrix == null || matrix[0] == undefined){ return false }
  arr = matrix.filter(a => typeof(a) === "string");
  if (arr.join() == ''){return false}
  let test = arr.map((a) => a.match(/\w+/)).join();
  test = test.match(/\b[a-zA-Z]/g).map((a)=> a.toUpperCase())
  return test.sort().join("")
};
