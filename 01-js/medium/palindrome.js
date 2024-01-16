/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  cleanstr = '';
  for (var i = 0; i < str.length; i++) {
    val = str[i].charCodeAt('0')
    if ((val >= 48 && val <= 57) || (val >= 97 && val <= 122)) {
      cleanstr += str[i];
    }
  }
  return cleanstr == cleanstr.split('').reverse().join('');
}

module.exports = isPalindrome;
