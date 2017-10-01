/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if (a === b) {
        return -1;
    }
    if (a.length > b.length) {
      return a.length;
    }       
    return b.length;
};

console.log(findLUSlength("aaa", "aaab"));