// Count vowels in a string

function countVowels(str){
    return str.match(/[aeiou]/gi)?.length || 0;
}

console.log(countVowels('hello world'))