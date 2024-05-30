// function reverseString(str) {
//   //we can not reverse a string using reverse() method. But, we can reverse an array using reverse() method
//   return str.split('').reverse().join('');
// }

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

module.exports = reverseString;
