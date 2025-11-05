// Check whether string is palindrom 

function palindrome(str) {
   str = str.toLowerCase().replace(/[^a-z]+/g,"");
   return str === str.split("").reverse().join("")
}

console.log(palindrome("eye")); //true
console.log(palindrome("Race car")); //true
console.log(palindrome("Madam, I'm Adam")); //true